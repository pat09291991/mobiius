## v0.16.0

- Add Login Page
- Add Admin Panel Page
- Add seed phrase modal and send email modal

## v0.15.0

- Reskinned KYC Seflie screen
- Applied a work arround solution for seflie overlay with the use of `SVG` and `Mask` element
- Button on the design is not functional. The design on figma is not inline with the current screen logic.
  Picture automatically captures every 5 second instead of manually capturing it.
- Success page design is not final. Design on figma shows 1 capture only while in actual the KYC selfie portion requires
  4 to be taken. Current design is ready to handle 4 images displayed. Overlay design is not final.
- Modify done button to link

## v0.15.0

- Reskinned KYC About screen

## v0.14.0

- Reskinned KYC Welcome screen

## v0.13.0

- Reskinned KYC Location screen

## v0.12.0

- Reskinned progress bar

## v0.11.0

- Created a offers page
- Added `color` parameter for the resusable icon component
- Modify result page by adding Selfie, Front/Back ID and voice recognition
- Added Digital ID page and Conratulatory page
- Modify button share
- Modify zIndex of digital id page
- Modify alignment and added condition for mobile and desktop of kyc
- Modify audio recording and links
- Add layout condition for mobile
- Fix webkit error at voice page

## v0.10.0

- Modify Upload Id Page and add back id image
- Separate camera UI to another page `verify/{userHash}/id/take-photo`
- Added Icon component
- Install new package react-voice-visualizer
- Modify KYC voice recognition page
- Modify error handling on voice recognition
- Add classname optional at pagedescription component
- Change file export from const to export default

## v0.9.0

- Modify Upload Id Page and add back id image
- Separate camera UI to another page `verify/{userHash}/id/take-photo`
- Added Icon component

## v0.8.1

- Added `pnpm install` in `pre-commit` script
- Added `pnpm build` in `pre-push`script
- Fixed lint errors in `scenario.tsx`
- Upgraded `next` to `14.2.3`

## v0.8.0

- Updated landing page

## v0.7.1

- Added `preinstall` script to stop any `npm` installations
- Removed `package-lock.json` from repository since we're using `pnpm`

## v0.7.0

- Improve save button text in location page in `/verify/{userHash}/location`
- Fixed save button text showing up as "Saved" when it's not saved yet in about page in `/verify/{userHash}/about`
- Disabled skip button in selfie page in `/verify/{userHash}/selfie`
- Added enablig of skip button in selfie page in `/verify/{userHash}/selfie` after 30 seconds since sometimes the camera doesn't detect the user's face after many tries
- Disabled "Upload" button in ID page in `/verify/{userHash}/id` when no image is selected
- Fixed typo in ID page in `/verify/{userHash}/id`
- Improve results page. Only show "Fully Verified" if all steps are completed

## v0.6.0

- Improve messages in selfie page in `/verify/{userHash}/selfie`
- Updated result page in `/verify/{userHash}/result` to show selfie and ID images

## v0.5.0

- Made all `fetch` use `cache: "no-store"` so all requests are not cached
- Added saving of voice recording in `/verify/{userHash}/voice` to database
- Moved content of result page to new page in admin in `/admin/{userId}`
- Updated design of result page in `/verify/{userHash}/result`
- Added gradient background image to layout
- Removed link to admin from homepage. Access admin by going to `/admin` direct
- Added delete user button in `/admin` page

## v0.4.0

- Added saving of selfie in `/verify/{userHash}/selfie` to database
- Added saving of ID in `/verify/{userHash}/id` to database
- Removed back of ID in `/verify/{userHash}/id` page
- Added taking of selfies every 2 seconds in `/verify/{userHash}/selfie` page

## v0.3.0

- Renamed `userId` to `userHash` wherever it is used
- Added _Generate User Form_ button to `/admin` page. Clicking the button will generate a new form and redirect to the QR code page for the new user
- Added saving of user location in `/verify/{userHash}/location` to database
- Added saving of user details in `/verify/{userHash}/about` to database

## v0.2.0

- Added `API` variable to `.env`
- Added `.env` support to make it easier to configure the app

## v0.1.0

- Initialized repository
- Setup `pnpm`
- Added `CHANGELOG.md`
- Added Prettier with Husky and `lint-staged`
- Setup `eslint` config
- Added `shadcn/ui`
- Added `Alert`, `Button`, `Input`, and `Table` from `shadcn/ui`
- Added verify welcome page in `/verify/welcome`
- Added verify location page in `/verify/location`
- Added verify about page in `/verify/about`
- Added verify selfie page in `/verify/selfie`
- Added verify id page in `/verify/id`
- Added verify voice page in `/verify/voice`
- Added basic admin page in `/admin` with list of users
- Added QR code page for user to scan to verify in `/admin/{userId}/qr`
- Updated default layout
