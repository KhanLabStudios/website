import { HeadingComponent } from "../../src/server/project/components/heading-component.js";
import { ProjectPageRouter } from "../../src/server/project/project-page-router.js";
import { ProjectPage } from "../../src/server/project/project-page.js";
import { LinkTextComponent } from "../../src/server/project/rich-text/link-text-component.js";
import { ListItemTextComponent } from "../../src/server/project/rich-text/list-item-text-component.js";
import { ListTextComponent } from "../../src/server/project/rich-text/list-text-component.js";
import { ParagraphComponent } from "../../src/server/project/rich-text/paragraph-component.js";
import { PlainTextComponent } from "../../src/server/project/rich-text/plain-text-component.js";
import { StyledTextComponent } from "../../src/server/project/rich-text/styled-text-component.js";
import { HeaderSection } from "../../src/server/project/sections/header-section.js";
import { PaddedSection } from "../../src/server/project/sections/padded-section.js";

class MainPage extends ProjectPage {
    async generateWebpage(): Promise<string> {
        this.addPageSections(new HeaderSection());
        this.addPageSections(new PaddedSection(
            new HeadingComponent('Bob\'s Project'),
            new ParagraphComponent(
                new PlainTextComponent('This projects is about '),
                new StyledTextComponent('bold', new PlainTextComponent('cats')),
                new PlainTextComponent(' becuse they are '),
                new StyledTextComponent('italic', new PlainTextComponent('cool')),
                new PlainTextComponent('. '),
                new LinkTextComponent([ new PlainTextComponent('Learn more!') ], 'https://en.wikipedia.org/wiki/Cat')
            ),
            new HeadingComponent('Tutorial: Befriending a cat'),
            new ParagraphComponent(
                new PlainTextComponent('To befriend a cat, you need to follow these steps:'),
                new ListTextComponent("ordered",
                    new ListItemTextComponent(new PlainTextComponent("Find a cat")),
                    new ListItemTextComponent(new PlainTextComponent("Approach the cat")),
                    new ListItemTextComponent(new PlainTextComponent("Pet the cat")),
                    new ListItemTextComponent(new PlainTextComponent("Feed the cat")),
                    new ListItemTextComponent(new PlainTextComponent("Adopt the cat"))
                )
            )
        ));
        
        return await super.generateWebpage();
    }
}

const router = new ProjectPageRouter();

router.addPage('/', new MainPage());

export default router;