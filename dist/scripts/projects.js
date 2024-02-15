let projectSummaries = window['_projectSummaryData'];

export async function getProjectSummaries() {
    if (!projectSummaries) {
        throw new Error("Project summaries not injected properly. Is the server running?");
    }

    return projectSummaries;
}