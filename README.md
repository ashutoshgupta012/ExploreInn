# 🏡 ExploreInn

A full-stack Airbnb-inspired web application that allows users to explore, create, and manage property listings. Users can securely register, upload property images, discover locations on interactive maps, and share reviews, providing a complete vacation rental experience.

---

# 📌 Features

| Feature | Description |
|---------|-------------|
| 🔐 Authentication | Secure User Registration & Login using Passport.js |
| 🏡 Property Listings | Create, Edit & Delete Property Listings |
| 📸 Image Upload | Upload listing images using Cloudinary |
| 🗺️ Interactive Maps | Display property locations using Mapbox |
| ⭐ Reviews & Ratings | Users can add and manage reviews |
| 🔍 Search Listings | Search properties by title, location, or country |
| 👤 Authorization | Only owners can edit or delete their listings |
| 📱 Responsive Design | Mobile-friendly interface using Bootstrap |
| ⚠️ Error Handling | Server-side validation and custom error pages |
| 🍪 Session Management | Authentication using Express Sessions & Cookies |

---

# 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | HTML5, CSS3, Bootstrap 5, JavaScript, EJS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | Passport.js, Passport Local, Express Session |
| Image Storage | Cloudinary |
| Maps & Geocoding | Mapbox |
| Validation | Joi |
| Deployment | Render |

---

# 📂 Project Structure

| Folder | Purpose |
|---------|----------|
| controllers/ | Business Logic |
| models/ | MongoDB Schemas |
| routes/ | Express Routes |
| middleware/ | Authentication & Authorization Middleware |
| public/ | Static Files (CSS, JS, Images) |
| views/ | EJS Templates |
| utils/ | Custom Error Classes & Utilities |
| init/ | Database Initialization |
| app.js | Main Server File |

---

# 🔐 Authentication Features

| Functionality | Status |
|--------------|--------|
| User Registration | ✅ |
| User Login | ✅ |
| Secure Authentication | ✅ |
| Protected Routes | ✅ |
| Logout Functionality | ✅ |
| Owner Authorization | ✅ |

---

# 🏠 Listing Features

| Component | Description |
|-----------|-------------|
| Create Listing | Add new property listings |
| Edit Listing | Update listing details |
| Delete Listing | Remove listings securely |
| Upload Images | Store images using Cloudinary |
| View Map | Display property location using Mapbox |
| Reviews | Add and delete reviews |
| Search | Search listings by title, location, or country |

---

# ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ExploreInn.git
```

### Navigate to the Project Folder

```bash
cd ExploreInn
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add:

```env
ATLASDB_URL=YOUR_MONGODB_CONNECTION_STRING

SECRET=YOUR_SESSION_SECRET

CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
CLOUD_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUD_API_SECRET=YOUR_CLOUDINARY_API_SECRET

MAP_TOKEN=YOUR_MAPBOX_ACCESS_TOKEN
```

### Run the Project

```bash
npm start
```

or (for development)

```bash
nodemon app.js
```


---

# 📸 Screenshots

| Page | Preview |
|------|---------|
| Home Page | Add Screenshot |
| Listing Details | Add Screenshot |
| Create Listing | Add Screenshot |
| Login Page | Add Screenshot |
| Map View | Add Screenshot |

---

# 🎯 Future Enhancements

| Enhancement | Status |
|-------------|--------|
| ❤️ Wishlist Feature | 🔄 Planned |
| 💳 Online Booking & Payments | 🔄 Planned |
| 💬 User Chat | 🔄 Planned |
| 📅 Booking Calendar | 🔄 Planned |
| 🔎 Advanced Filters | 🔄 Planned |
| 🌙 Dark Mode | 🔄 Planned |

---

# 📚 Learning Outcomes

- RESTful API Development
- MVC Architecture
- Authentication & Authorization
- CRUD Operations
- MongoDB & Mongoose
- Cloudinary Image Upload
- Mapbox Integration
- Session Management
- Server-side Validation using Joi
- Full-Stack Deployment on Render

---

# 👨‍💻 Author

**Ashutosh Gupta**

GitHub: https://github.com/ashutoshgupta012

---

# ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub!
