# Banten Pedia Development Contribution Guide

Welcome, Developers!✨

Please follow the guidances below to keep the contribution process safe and smooth. This guide focuses on technical contributions as mentioned in the [README.md](./README.md).

## 🪾 Branching Strategy

Our repository uses the following branching strategy:

- **`main`**: This is the deployment branch. It contains stable, production-ready code. Direct commits to this branch are restricted.
- **`development`**: This is the branch mainly used for development and integration. **All** pull requests (PRs) should target this branch.
- **`fix/<issue-name>` or `feat/<feature-name>`**: These branches are used for your actual work based on the feature you are building or the issue you are fixing.

## 🚀 Contribute: Step-by-Step

1. **Fork the Repository**: Start by forking the [bantenpedia](https://github.com/Rayaska/bantenpedia) repository to your own GitHub account.
2. **Clone your Fork**: Clone the forked repository to your local machine.
3. **Create a Branch**: Create a new branch based off the `development` branch for your work. Name it appropriately (e.g., `feat/add-new-api` or `fix/login-bug`).
   ```bash
   git checkout development
   git pull origin development
   git checkout -b feat/your-feature-name
   ```
4. **Make Changes**: Implement your feature or fix the bug.
5. **Commit your Changes**: Commit your changes using **Conventional Commits (MUST)** (see the [Note for PR](#note-for-pr) section below).
6. **Push to your Fork**: Push your branch to your forked repository.
   ```bash
   git push origin feat/your-feature-name
   ```
7. **Open a Pull Request**: Go to the original [bantenpedia](https://github.com/Rayaska/bantenpedia) repository and open a Pull Request. Ensure that the **base branch** is set to `development` and the **compare branch** is your `fix/feat` branch.

## 📝 Note for PR

- **Target Branch**: Always ensure your Pull Request is directed towards the `development` branch, not `main`.
- **Conventional Commits**: Commit messages must follow the [Conventional Commits specification](https://www.conventionalcommits.org/). This helps us automate release notes and maintain a clean history.
  - **Format**:
    ```
    <type>(<optional scope>): <description>
    ```
  - **Common Types**:
    - `feat`: A new feature
    - `fix`: A bug fix
    - `docs`: Documentation only changes
    - `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    - `refactor`: A code change that neither fixes a bug nor adds a feature
    - `perf`: A code change that improves performance
    - `test`: Adding missing tests or correcting existing tests
    - `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation
  - **Examples**:
    - `feat(api): add new endpoint for upakara list`
    - `fix(ui): resolve crash on sveltekit routing`
    - `docs: update contributing guidelines`
- **Description**: Provide a clear and descriptive summary of what your PR does in the PR description.
- **Local Check**: Please make sure the updated code run smoothly on your local machine. These are the checks you need to do before opening a PR.
  - [x] Code is tested locally
  - [x] Lint and build pass successfully
  - [x] Updated UI is following the design already implemented
  - [x] Updated API is following the API structure
  - [x] No unrelated changes are included

## ❓ Need Help?

If you need help or have questions, feel free to open an [issue](https://github.com/Rayaska/bantenpedia/issues) with `help wanted` label.

## 🙌 Thank You
Your contributions mean a lot to us. We appreciate your time and effort in helping us improve Banten Pedia. 