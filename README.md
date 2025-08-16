# BioAlign

[![Website](https://img.shields.io/badge/Website-GitHub%20Pages-blue?style=flat&logo=github&logoColor=white)](https://2h3ph3rd.github.io/bio-align/)
&nbsp;
[![Deployment](https://github.com/francescopastore/bio-align/actions/workflows/deploy.yml/badge.svg)](https://github.com/francescopastore/bio-align/actions/workflows/deploy.yml)
&nbsp;
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
&nbsp;
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

![logo](./public/header.png)

A web app for string alignment algorithms used in bioinformatics courses

## Supported algorithms

- [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance)
- [Needleman–Wunsch](https://en.wikipedia.org/wiki/Needleman%E2%80%93Wunsch_algorithm)
- [Longest Common Subsequence](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem)
- [Smith–Waterman algorithm](https://en.wikipedia.org/wiki/Smith%E2%80%93Waterman_algorithm)

## Development

Clone this repo and start the dev server with `npm run start`.

To add a new algorithm:

- go in logic and add here a new file for the calculation

- add a new entry to the exported object

- (not required) add a new test file

- check if everything works fine!

Feel free to do PRs for bugfixes or new functionalities. Thanks in advance!
