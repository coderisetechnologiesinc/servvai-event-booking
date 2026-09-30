# WP Super Events

## Overview
This document outlines the rules and regulations for commits, branching, merging, and release management for the WP Super Events project maintained in the `coderisetechnologiesinc/servvai-event-booking` repository.

> **Note:** WP Super Events is the product name. The existing GitHub repository name and repository URLs remain unchanged.

## Branching Model
The repository uses two primary branches:

- **main**: The production-ready branch containing stable, released WP Super Events code. No direct commits are allowed to `main`. Only administrators can merge pull requests (PRs) into `main`.

- **develop**: The integration branch where all WP Super Events feature development and bug fixes are merged. Contributors work on feature branches forked from this branch.

## Contribution Workflow

### 1. Forking and Feature Branches

- **Fork the Repository**: Contributors must fork the `coderisetechnologiesinc/servvai-event-booking` repository to their own GitHub account.

- **Create a Feature Branch**:
  - Clone your fork locally:

    ```bash
    git clone https://github.com/<your-username>/servv.git
    cd servv
    ```

  - Create a feature branch from `develop`:

    ```bash
    git checkout develop
    git checkout -b feature/<feature-name>
    ```

  - Example: `feature/add-user-auth` or `feature/fix-login-bug`.

- **Make Changes**:
  - Implement WP Super Events enhancements or fixes in your feature branch.
  - There are **no restrictions** on commit message formats. Contributors can use any descriptive message (e.g., "Add user authentication", "Fix login bug").
  - Commit changes:

    ```bash
    git add .
    git commit -m "Your commit message"
    git push origin feature/<feature-name>
    ```

### 2. Pull Request to `develop`

- **Create a Pull Request (PR)**:
  - Push your feature branch to your fork and create a PR from `feature/<feature-name>` to `coderisetechnologiesinc/servv:develop` via GitHub.
  - Provide a clear PR description detailing the changes and purpose.

- **Review Process**:
  - The repository maintainers will review the PR.
  - Address any feedback.

- **Merge to `develop`**:
  - Once approved, maintainers will merge the PR into `develop`.
  - The feature branch can be deleted after merging.

### 3. Release Process (Admin Only)

- **Create PR from `develop` to `main`**:
  - Only **administrators** can create PRs from `develop` to `main`.
  - Create a PR from `develop` to `main` via GitHub.

- **Assign Release Label**:
  - During PR creation, the admin must assign **one** of the following labels to indicate the type of WP Super Events release:
    - `release:major`: Increments the major version (e.g., `v1.0.0` → `v2.0.0`). Used for breaking changes or major features.
    - `release:minor`: Increments the minor version (e.g., `v1.0.0` → `v1.1.0`). Used for
