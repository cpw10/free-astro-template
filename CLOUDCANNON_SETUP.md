# CloudCannon Setup Guide

This Astro template has been configured for CloudCannon visual editing with Editable Regions. Your non-technical marketers can now edit text and images directly in CloudCannon's Visual Editor.

## What's Been Configured

### 1. CloudCannon Configuration File
- **File**: `cloudcannon.config.yml`
- Defines collections, paths, and editor settings
- Configures data files for skills, work experience, and studies

### 2. Editable Regions Added

The following components now have editable regions:

#### **Hero Section** ([src/components/sections/HeroSection.astro](src/components/sections/HeroSection.astro))
- `title` - Main headline
- `subtitle` - Subheading text
- `primaryCTA.text` - Primary button text
- `secondaryCTA.text` - Secondary button text

#### **Skills Section** ([src/components/sections/SkillsSection.astro](src/components/sections/SkillsSection.astro))
- `title` - Section heading
- `skills[index].title` - Each skill's title
- `skills[index].description` - Each skill's description

#### **Work Experience** ([src/components/sections/WorkExperience.astro](src/components/sections/WorkExperience.astro))
- `title` - Section heading
- `items[index].title` - Job title
- `items[index].company` - Company name
- `items[index].region` - Location
- `items[index].description` - Job description

#### **Studies** ([src/components/sections/Studies.astro](src/components/sections/Studies.astro))
- `title` - Section heading
- `items[index].title` - Degree/Program name
- `items[index].institution` - School/Institution name
- `items[index].description` - Study description

#### **Footer** ([src/components/sections/Footer.astro](src/components/sections/Footer.astro))
- `footer.heading` - "Want to work with me?" heading
- `footer.subheading` - Subheading text
- `footer.buttonText` - Contact button text
- `footer.authorName` - Author name

#### **Header** ([src/components/sections/Header.astro](src/components/sections/Header.astro))
- `header.logo` - Site logo/favicon image

## How to Use with CloudCannon

### Step 1: Connect Your Repository to CloudCannon
1. Log in to [CloudCannon](https://cloudcannon.com)
2. Create a new site and connect this GitHub repository
3. CloudCannon will automatically detect the Astro configuration

### Step 2: Enable Visual Editing
1. In CloudCannon, navigate to your site settings
2. Ensure the Visual Editor is enabled for pages
3. CloudCannon will use the `cloudcannon.config.yml` to configure the editor

### Step 3: Edit Content Visually
1. Navigate to any page in the Visual Editor
2. Click on any text or image with editable regions
3. Edit directly in the interface
4. Changes will be committed back to your repository

## Data Files for Editing

Marketers can edit the following data files through CloudCannon's Data Editor:

- **Skills**: [src/data/skills.ts](src/data/skills.ts)
- **Work Experience**: [src/data/work.ts](src/data/work.ts)
- **Studies**: [src/data/studies.ts](src/data/studies.ts)

## Technical Details

### Editable Region Syntax
We're using CloudCannon's new Editable Regions system with the following attributes:

**For Text:**
```html
<h1 data-editable="text" data-prop="title">Editable Title</h1>
<p data-editable="text" data-prop="items[0].description">Editable description</p>
```

**For Images:**
```html
<img src="/logo.png" data-editable="image" data-prop-src="header.logo" />
```

### CloudCannon's New Editable Regions (2025)
This setup uses CloudCannon's updated Editable Regions system (released November 2025) which supports:
- Text Editable Regions (`data-editable="text"` + `data-prop=""`)
- Image Editable Regions (`data-editable="image"` + `data-prop-src=""`)
- Array editing with indexed paths (e.g., `items[0].title`)
- Front matter editing

## Next Steps

### Optional Enhancements

1. **Add Bookshop** (for component-based page building)
   - Install `@bookshop/astro-bookshop`
   - Create a `bookshop` folder structure
   - Enable drag-and-drop component building

2. **Configure Image Uploads**
   - Images will upload to `public/images` by default
   - Customize in `cloudcannon.config.yml` under `paths.dam_uploads`

3. **Add More Editable Regions**
   - Blog posts and portfolio pages can be made editable
   - Add `data-cms-edit` to any HTML element

## Resources

- [CloudCannon Documentation](https://cloudcannon.com/documentation/)
- [CloudCannon Astro Guide](https://docs.astro.build/en/guides/cms/cloudcannon/)
- [Editable Regions Guide](https://cloudcannon.com/documentation/articles/define-editable-regions-in-your-html/)
- [Updated Editable Regions (2025)](https://cloudcannon.com/documentation/changelog/2025/11/06/updated-editable-regions-configuration-mode-and-a-ui-overhaul.html)

## Support

If you encounter any issues with CloudCannon integration, check:
1. The `cloudcannon.config.yml` is properly formatted
2. Your site is building successfully on CloudCannon
3. The Visual Editor is enabled in site settings
4. Editable regions are properly defined with `data-cms-edit` attributes
