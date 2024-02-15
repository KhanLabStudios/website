import { ProjectSection } from "./project-section.js";
import { JSDOM } from 'jsdom';

export class HeaderSection extends ProjectSection {
    constructor(project, data = null) {
        super();

        this.project = project;
        this.loadFromData(data);
    }

    loadFromData(data) {
        if (!data.image) return;

        if (typeof data.image != 'object') {
            console.warn('Header image options must be an object');
            return;
        }

        if (!data.image.url || typeof data.image.url != 'string') {
            console.warn('Header image URL is required and must be a string');
            return;
        }

        if (data.image.alt && typeof data.image.alt != 'string') {
            console.warn('Header image alt text must be a string if present');
            return;
        }

        if (data.image.tint && typeof data.image.tint != 'string') {
            console.warn('Header image tint value must be a string (css color) if present');
            return;
        }

        if (data.image.position && typeof data.image.position != 'string') {
            console.warn('If present, image.position must be a string that is a valid value for the css property background-position');
            return;
        }

        this.image = data.image;
    }

    *getStylesheets() {
        yield '/css/header.css';
    }

    createElement(document) {
        const fragment = JSDOM.fragment(`
            <div class="header">
                <div class="header-title"></div>
                <div class="column-layout">
                    <div class="column-side"></div>
                    <div class="column-center header-description"></div>
                    <div class="column-side"></div>
                </div>
            </div>
        `);

        fragment.querySelector('.header-title').textContent = this.project.title;
        fragment.querySelector('.header-description').textContent = this.project.author;

        if (this.image) {
            const header = fragment.querySelector('.header');
            header.style.backgroundImage = `url(${this.image.url})`;
            header.style.backgroundSize = 'cover';
            header.style.backgroundPosition = this.image.position || 'top center';
            header.style.backgroundBlendMode = 'lighten';
            header.style.backgroundColor = this.image.tint || 'transparent';
        }

        return fragment.querySelector('.header');
    }
}