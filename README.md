# jiggle
Easy to use and lightweight photo asset management software.

# High-level requirements

- Cross-platform (mac, Linux, Windows)
- Simply so even my mum could manage thousands of assets
- Manage thousands of photos and videos on-prem or in the cloud
- Web UI and later on maybe native UI's for 
- Responsive frontend so it works well on smartphones and one can upload smartphone photos easily
- Support EXIF and other metadata
- Photos and videos must be stored in the file-system in a natural folder hierarchie. Use a "moment" (aka album) for building the foldernames
- Define hierarchical tags
- Define smart-albums based on tags
- Streams/Activities so users cany easily follow the "what's new"
- Multiple usergroups and rights for different parts of the photo hierarchy
- Automated import and export features (provide API)
- Support upload of RAW images too. Store them as "variation" of the JPG's
- Optinoal: versioning

# Technology

- Backend with ASP.Net Core WebAPI
- SPA Frontend with eg. React
- Lightweight and crossplatform database running on-prem and in the cloud: Mongo DB
- Use SOLID Prinziples at its hart
- Implement backend using adapter pattern eg. for different storage-systems
- Use Docker-Containers for deployment
- Full CI/CD pipeline
- Unit-Testing for the backend
- Unit-Testing for the frontend where it makes sense
- Native clients eg for iOS and AppleTV using Xamarin (.Net Core, Xamarin Forms, etc.)

# Architecture

- Backend is REST API (ASP.Net Core WebAPI)
- Frontend is a responsive SPA (React with Redux)
- Metadata is stored in a Mongo-DB using the backend only.
- Photos and videos are stored on the file-system or in databases and other storages (Adapter pattern, start with file-system)

# Roadmap

## Milestome 1 (ready for my personal use to move pics to Jiggle)

- Store photos and movies on the filesystem
- Store metadata and other additional data in the database
- (Mass) Upload of files (pics and videos)
- Browse photos and videos using a standard webbrowser
- Manage tags
- Apply tags per file or in batch
- Timeline

## Milestone 2 (Security)

- User Managment
- Rights Management

## Milestone 3 (Publishing)

- Export to various format
  - XMB
  - Galery
  - File 1:1
- Streams with subscribers

## Future

- Mobile App to easely upload iOS Photos and browse
- More backends (eg. files in databases)
- Improved search
- ...
