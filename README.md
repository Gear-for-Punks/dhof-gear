# dhof-gear

Launch tweet for [Gear](https://twitter.com/gearforpunks/status/1433559541778563073).

<img src="https://www.gearforpunks.com/social_share.png" width="300">

## Distribution

- tokenIds `1` to `7777` claimable by a user.
- Each token has attributes: `chest`, `eyes`, `foot`, `hand`, `head`, `implant`, `waist`, `weapon`.

## Output

- `output/gear.json` contains all tokenIds and their attributes.
- `output/occurences.json` contains the number of occurences by attribute.
- `output/rare.json` contains a mapping of `gearId` to `score` (which is the sum of number of occcrences of each child attribute for a `gearId`), sorted ascending by `score`. It also includes `rarest` which is how rare the loot bags attributes are (`1` == `rarest`, `8000` == `least rare`).
- `output/images.json` contains the base64 encoded SVG of each tokenId

## Run locally

```bash
# Install dependencies
npm install

# Collect all Gear
npm run collect

# Parse statistics
npm run parse

# Collect base64 encoded images
npm run images
```

## Credits
- [@Anish-Agnihotri](https://github.com/Anish-Agnihotri/dhof-loot) for his awesome analytics project for loot which this was derived from
