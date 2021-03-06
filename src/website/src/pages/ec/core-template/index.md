---
order: 4
title: Core template
---

import { Paragraph, Anatomy, Link } from '@ecl/website-components';

<Paragraph size="lead">
  Core websites aim to minimise the duplication of content across the European
  Commission Services’ web presence and provide access to information in a
  user-friendly way.{' '}
  <strong>
    They host general information shared by many different websites or
    departments and serve as hubs for onward navigation
  </strong>{' '}
  to further thematic content and/or specific services such as web information
  systems.
</Paragraph>

## Anatomy

<Anatomy
image="https://inno-ecl.s3.amazonaws.com/media/images/EC/Core/core-template.png"
alt="Anatomy of core template"
legend={{
    items: [
      {
        color: '#404040',
        label: 'mandatory',
      },
      {
        color: '#004494',
        label: 'optional',
      },
    ],
  }}
/>

| Elements                                                                                                           | Mandatory | Description                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <Link to="https://webgate.ec.europa.eu/fpfis/wikis/display/webtools/Global+banner" standalone>global banner</Link> | yes       | the Global banner is the official EU stamp that gives a visual indicator and easy access to EU institutions and bodies sites, guaranteeing the user visits an official EU website                                                                                                                                                           |
| <Link to="/ec/core-template/site-header/usage/" standalone>core site header</Link>                                 | yes       | <p>the Core site header is present on every page. It communicates the European Commission brand and provides basic structure and guidance. The header is composed of several mandatory and optional elements such as:</p><ul><li>European Commission logo</li><li>Login</li><li>Language select</li><li>Europa search form</li></ul>        |
| <Link to="/ec/core-template/page-header/usage/" standalone>core page header</Link>                                 | yes       | <p>the Core page header gives context and information to the user on what the page is about. It is present on every page, just below the site header, except for the homepage. The page header is composed of mandatory and optional elements such as:</p><ul><li>Breadcrumb</li><li>Meta</li><li>Page title</li><li>Introduction</li></ul> |
| <Link to="/ec/core-template/footer/usage/" standalone>core footer</Link>                                           | yes       | the Core footer is present on every page. It provides supplementary information such as copyright, legal, privacy, social media, contact information and links to other important sites within the European Commission ecosystem.                                                                                                           |

**NOTE**: On the Page body section, when components are available, use components from ECL.

## Structural anatomy

When designing the page, make sure to follow appropriate category guidelines available below in terms of structure and layout

| Elements                                                           | Mandatory     | Description                                                             |
| ------------------------------------------------------------------ | ------------- | ----------------------------------------------------------------------- |
| <Link to="/ec/utilities/grid/" standalone>grid</Link>              | yes           | enhance visual consistency                                              |
| <Link to="/ec/guidelines/colours/" standalone>colours</Link>       | yes           | use only European Commission colour specifications available in the ECL |
| <Link to="/ec/guidelines/typography/" standalone>typography</Link> | yes           | apply the typographic guidelines available in the ECL                   |
| <Link to="/ec/guidelines/spacing/" standalone>spacing</Link>       | yes           | apply spacing rules explained in the ECL                                |
| <Link to="/ec/guidelines/iconography/" standalone>icons</Link>     | contextual \* | where icons feature, use commonly-used icons from the ECL               |
| <Link to="/ec/guidelines/images/" standalone>images</Link>         | contextual \* | see image guidelines in ECL                                             |

<Paragraph size="s">
  * <strong>Contextual</strong> – elements that may or may not feature on a
  page, depending on the communication and/or functional needs – for example,
  Login. Where the element features, use the ECL component.
</Paragraph>

## Do's

- make sure the pages contain all the elements in the anatomy table above

## Don'ts

- do not replace pages only on existing websites as this will create visual inconsistencies, this must be done at a site level

## When to use

- when updating pages on the Core site (first three levels of ec.europa.eu)

## When not to use

- do not follow these guidelines when you are updating sites that fall under the <Link to="/ec/standardised-template/">Standardised</Link> or <Link to="/ec/harmonised-templates/group1/">Harmonised</Link> category
