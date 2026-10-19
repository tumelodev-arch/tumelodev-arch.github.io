<p align="center">
  <img src="https://raw.githubusercontent.com/tumelodev-arch/tumelodev-arch/main/assets/profile-terminal.svg" alt="Terminal-style banner reading Tumelo Phale — Software Engineering, .NET, TypeScript and Quality" width="100%">
</p>

<p align="center">
  <a href="https://tumelodev-arch.github.io/"><img src="https://img.shields.io/badge/Portfolio-live-56d4a2?style=flat-square&labelColor=0d1117" alt="Live portfolio"></a>
  <a href="https://www.linkedin.com/in/tumelo-junior-phale-a6579527b/"><img src="https://img.shields.io/badge/LinkedIn-connect-f778ba?style=flat-square&labelColor=0d1117" alt="LinkedIn profile"></a>
  <a href="https://github.com/tumelodev-arch?tab=repositories"><img src="https://img.shields.io/badge/GitHub-repositories-c9d1d9?style=flat-square&labelColor=0d1117" alt="Repositories"></a>
</p>

## `$ whoami`

```console
tumelo@github:~$ whoami
Tumelo Phale

tumelo@github:~$ cat ~/.profile
role        Software Engineer
focus       .NET · TypeScript · Application Quality
location    Johannesburg, South Africa
approach    Understand → Implement → Test → Explain
```

I build and document software with a focus on **application behaviour, validation, testing and reliable delivery**. This profile is a working record of projects I can demonstrate, engineering choices I can explain, and areas I am actively developing.

## `$ cat skills.txt`

<p align="center">
  <img src="https://skillicons.dev/icons?i=cs,dotnet,angular,ts,js,html,css,aws,git,github,azure,postman&perline=6" alt="C sharp, .NET, Angular, TypeScript, JavaScript, Python, SQL, Git, GitHub, Azure and Postman icons">
</p>

```yaml
application:
  - C# / .NET / ASP.NET Core
  - Angular / TypeScript / JavaScript
  - SQL / REST APIs

quality_and_delivery:
  - Input validation and negative testing
  - Unit-testing practices and Cypress E2E
  - Git, pull requests and CI troubleshooting
  - Defect investigation and technical documentation

currently_building:
  - AWS foundations and cloud delivery
  - Service observability and reliability
  - Secure service operation
```

## `$ ls ~/projects`

<table>
  <tr>
    <td width="50%" valign="top">
      <h3><a href="https://tumelodev-arch.github.io/projects/RuleTrace/demo.html">01 / RuleTrace</a></h3>
      <p>Rule-by-rule validation for synthetic records, with explicit outcomes and explanations.</p>
      <p><strong>Stack:</strong> C# · ASP.NET Core · xUnit</p>
      <p><strong>Status:</strong> Browser demo live; API runs locally.</p>
      <p><a href="https://github.com/tumelodev-arch/tumelodev-arch.github.io/tree/main/projects/RuleTrace">Source</a> · <a href="https://github.com/tumelodev-arch/tumelodev-arch.github.io/blob/main/projects/RuleTrace/ARCHITECTURE.md">Architecture</a></p>
    </td>
    <td width="50%" valign="top">
      <h3><a href="https://tumelodev-arch.github.io/projects/ReleaseLens/index.html">02 / ReleaseLens</a></h3>
      <p>An interactive dashboard for exploring sample build history, outcomes and failure categories.</p>
      <p><strong>Stack:</strong> TypeScript · HTML · CSS</p>
      <p><strong>Status:</strong> Live static demo with filtering and CSV export.</p>
      <p><a href="https://github.com/tumelodev-arch/tumelodev-arch.github.io/tree/main/projects/ReleaseLens">Source</a></p>
    </td>
  </tr>
</table>

## `$ ./tools --list`

| Tool | Purpose | Live demo |
| --- | --- | --- |
| **[Randwise](https://tumelodev-arch.github.io/projects/Randwise/)** | Monthly cash-flow tracking, spending breakdown and filtered CSV export. | [Launch ↗](https://tumelodev-arch.github.io/projects/Randwise/) |
| **[Incident Atlas](https://tumelodev-arch.github.io/projects/IncidentAtlas/)** | Incident logging, severity/state changes, resolution metrics and JSON export. | [Launch ↗](https://tumelodev-arch.github.io/projects/IncidentAtlas/) |
| **[Decision Archive](https://tumelodev-arch.github.io/projects/DecisionArchive/)** | Searchable architecture decisions with Markdown export and JSON backup/restore. | [Launch ↗](https://tumelodev-arch.github.io/projects/DecisionArchive/) |

Each is a working local-first browser application. Records are stored in your browser and are not synchronised to a server; use synthetic or non-sensitive data only.

<p align="center">
  <a href="https://tumelodev-arch.github.io/"><strong>Open the portfolio →</strong></a>
  &nbsp;·&nbsp;
  <a href="https://tumelodev-arch.github.io/work.html"><strong>Read the case studies →</strong></a>
</p>

> **Demo boundary:** RuleTrace uses a separate browser-side example; its .NET API is not publicly hosted. ReleaseLens uses invented sample records and is not connected to a live CI provider.

## `$ git log --graph --all --format='%C(auto)%h %s'`

<p align="center">
  <img src="https://raw.githubusercontent.com/tumelodev-arch/tumelodev-arch/main/profile-3d-contrib/profile-night-rainbow.svg" alt="Isometric GitHub contribution calendar generated from public activity" width="100%">
</p>

## `$ metrics --user tumelodev-arch`

<p align="center">
  <img height="165" src="https://github-readme-stats.vercel.app/api?username=tumelodev-arch&show_icons=true&hide_border=true&theme=transparent&bg_color=0d1117&title_color=56d4a2&text_color=c9d1d9&icon_color=f778ba" alt="GitHub overview statistics">
  <img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=tumelodev-arch&layout=compact&hide_border=true&theme=transparent&bg_color=0d1117&title_color=56d4a2&text_color=c9d1d9" alt="Most used languages in public repositories">
</p>

<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=tumelodev-arch&bg_color=0d1117&color=c9d1d9&line=56d4a2&point=f778ba&area=true&hide_border=true" alt="GitHub contribution activity graph" width="100%">
</p>

## `$ cat ~/.engineering-principles`

```text
01  Reproduce the behaviour before changing code.
02  Separate evidence from assumptions.
03  Make rules explicit and test invalid paths.
04  Prefer useful explanations over opaque status.
05  State limitations; do not oversell prototypes.
06  Use AI as a reviewer, then verify the result independently.
```

## `$ tail -n 3 notes.log`

- [A failing build is evidence, not a diagnosis](https://tumelodev-arch.github.io/notes.html#note-001)
- [Validation is part of the domain](https://tumelodev-arch.github.io/notes.html#note-002)
- [Write down what would disprove the hypothesis](https://tumelodev-arch.github.io/notes.html#note-003)

## `$ contact --open`

```console
tumelo@github:~$ printf "LinkedIn: %s\nPortfolio: %s\n" \
  "linkedin.com/in/tumelo-junior-phale-a6579527b" \
  "tumelodev-arch.github.io"
```

<p align="center">
  <sub>Built with intent. Documented with evidence. Improving one useful change at a time.</sub>
</p>
