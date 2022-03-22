import * as core from '@actions/core';
import * as github from '@actions/github'

async function main() {
    const githubToken = core.getInput('GITHUB_TOKEN');
    const context = github.context

    const octokit = github.getOctokit(githubToken)


    console.log({ githubToken, context, octokit })
}

main()