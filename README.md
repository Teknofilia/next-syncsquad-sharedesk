# Project Sharedesk

## How to use

```bash
git clone git@github.com:Teknofilia/next-syncsquad-sharedesk.git
```

```bash
cd next-syncsquad-sharedesk
```

```bash
npm install
```

```bash
npm run dev
```

## How to contribute

### UI Design

- Start with creating UI before functionality
- Use NextUI for UI components and TailwindCSS for styling
- DO NO USE any other UI library

### Functionality

- Create a new branch for each feature
- Create a pull branch for each feature
- DO NOT merge your own pull request

## Commit Message Format

You have to follow the following format for commit message

```bash
git commit -m "type: subject"
```

### Type

Must be one of the following:

- **feat** : A new feature
- **fix** : A bug fix
- **chore** : Chages to the build process or auxiliary tools and libraries such as documentation generation

### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- do not capitalize first letter
- no dot (.) at the end

### Examples

```bash
git commit -m "feat: add login page"
```

```bash
git commit -m "fix: login page not working"
```

```bash
git commit -m "chore: update readme"
```
