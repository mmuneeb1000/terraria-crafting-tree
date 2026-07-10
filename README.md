# Terraria Crafting Tree

A fan-made Terraria reference application built with React, Vite, and Tailwind CSS.

The goal of this project is to make exploring Terraria's crafting system significantly easier by presenting recipes as interactive crafting trees instead of long lists. The application combines fast search, recursive recipe visualization, and a large preprocessed item database to help players quickly understand how any item is crafted.

Although the project began as a crafting tree viewer, it is being expanded into a complete Terraria companion featuring item information, crafting stations, categories, bosses, NPCs, and other game resources.

---

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Data Processing Pipeline](#data-processing-pipeline)
- [Application Structure](#application-structure)
- [Core Features](#core-features)
- [Homepage](#homepage)
- [Search System](#search-system)
- [Item Pages](#item-pages)
- [Crafting Tree System](#crafting-tree-system)
- [Terraria Grid](#terraria-grid)
- [Performance Optimizations](#performance-optimizations)
- [Development](#development)
- [Roadmap](#roadmap)
- [License](#license)

---

# Overview

Terraria contains thousands of items and recipes, many of which depend on long crafting chains. While the official wiki provides all of the necessary information, navigating multiple pages to understand dependencies can be slow.

This project attempts to solve that problem by transforming Terraria's crafting data into a graph structure that can be explored visually.

Every item can be searched instantly, opened on its own page, and explored through a recursive crafting tree that displays every ingredient required to craft it.

---

# Technology Stack

## Frontend

- React
- Vite
- React Router
- Tailwind CSS

## Libraries

- Fuse.js
- Lucide React
- React Icons

## Build Tools

- Node.js
- Custom preprocessing scripts

---

# Project Architecture

The application separates responsibilities into three stages.

## Stage 1

Raw Terraria data is collected from the game data source[Pinkgel](https://pinkgel.github.io/).

↓

## Stage 2

Node.js preprocessing scripts transform the raw data into optimized JSON files that are much easier for the frontend to consume.

↓

## Stage 3

React loads only the processed JSON datasets and renders the user interface without needing to perform expensive data transformations inside the browser.

This architecture keeps runtime performance fast while making the React components relatively simple.

---

# Core Features

## Fast Search

Search is powered by Fuse.js, allowing users to find items even with incomplete or misspelled names.

The search system provides:

- Instant results
- Fuzzy matching
- Optimized indexing
- Dedicated search page

---

## Item Pages

Every Terraria item has its own route.

Example:

```text
/item/zenith
/item/cell_phone
/item/ankh_shield
```

Each page is designed to display all relevant information in one place.

Current sections include:

- Item information
- Recipes
- Crafting trees
- Related crafting information
- Social sharing

---

## Crafting Tree Renderer

The crafting tree renderer is the largest feature in the project.

Unlike a simple recipe list, the renderer recursively expands every ingredient until reaching base materials.

The renderer supports:

- Recursive rendering
- Ingredient grouping
- Multiple recipe paths
- Accordion expansion
- Deep crafting chains
- Responsive layouts

This allows players to understand complex crafting chains with minimal navigation.

---

# Homepage

The homepage serves as the entry point into the application.

Current sections include:

- Hero section
- Large search component
- Featured crafting trees
- Popular items
- Terraria item mosaic

Future homepage improvements will continue focusing on discoverability rather than simply listing every item.

---

# Terraria Grid

One of the more unique features of the homepage is the Terraria item mosaic.

Rather than displaying a traditional logo, the application renders hundreds of Terraria item sprites arranged into the word "TERRARIA".

The system works by:

1. Generating a bitmap from text.
2. Converting the bitmap into a boolean mask.
3. Randomly selecting valid Terraria items.
4. Filling every grid cell.
5. Highlighting only the pixels that form the letters.
6. Linking every sprite to its corresponding item page.

Supporting utilities include:

- Pixel font
- createMask()
- imageMap filtering
- Random item shuffling

---

# Performance Optimizations

Performance has been considered throughout development.

Current optimizations include:

- Memoized rendering using useMemo
- Lazy-loaded images
- Preprocessed JSON datasets
- Image filtering
- Reduced runtime calculations
- Efficient recursive rendering
- Smaller search datasets

Moving expensive work into preprocessing scripts keeps the React application lightweight.

---

# Roadmap

The current application forms the foundation of a complete Terraria reference website.

Planned improvements include:

## Content Expansion

Expand the application beyond crafting by adding dedicated pages for NPCs, bosses, biomes, events, enemies, buffs, armor sets, crafting stations, and item categories, transforming the project into a complete Terraria reference.

## Search & Discovery

Improve navigation with advanced filters, category browsing, reverse recipe lookup, related item recommendations, and recently viewed items to make discovering content faster and more intuitive.

## User Features

Introduce quality-of-life features such as favorites, item comparison, crafting checklists, and shareable crafting lists to help players organize and track their progression.

## Crafting Tree Enhancements

Continue improving the crafting tree renderer with expand/collapse controls, alternative layouts, crafting station highlights, ingredient filtering, and interactive dependency visualization for complex recipes.

## Performance

Optimize rendering through virtualization, smarter image loading, route-based code splitting, improved caching, and additional preprocessing to keep the application responsive as the dataset grows.

## SEO & Accessibility

Improve discoverability with dynamic metadata, Open Graph support, structured data, and an XML sitemap while enhancing accessibility through keyboard navigation, screen reader support, and reduced motion options.

## Developer Experience

Strengthen maintainability by introducing automated testing, TypeScript support, CI/CD workflows, improved error handling, and additional data generation scripts.

## UI & Polish

Refine the overall experience with richer homepage sections, smoother animations, enhanced loading states, improved Terraria-inspired visuals, and additional interactive elements.

---

# License

This project is a fan-made Terraria companion application intended for educational and informational purposes.

Terraria and all related assets, trademarks, and intellectual property belong to Re-Logic.
