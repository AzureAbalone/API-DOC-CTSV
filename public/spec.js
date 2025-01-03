var spec = {
    swagger: "2.0",
    info: {
        description: "API documentation for CTSV System",
        version: "1.0",
        title: "CTSV API DOC"
    },
    host: "au.cunghoc.net",
    basePath: "/api",
    tags: [
        { name: "events", description: "Event management operations" },
        { name: "landing", description: "Landing page content operations" },
        { name: "clubs", description: "Club management operations" },
        { name: "jobs", description: "Job management operations" },
        { name: "students", description: "Student management operations" },
        { name: "notifications", description: "Notification management operations" },
        { name: "profile", description: "User profile operations" }
    ],
    schemes: ["http", "https"],
    paths: {
        "/v1/events": {
            get: {
                tags: ["events"],
                summary: "Get all published and cancelled events",
                description: "Returns a list of all events with status 'published' or 'cancelled'",
                operationId: "getEvents",
                produces: ["application/json"],
                responses: {
                    200: { description: "Successful operation", schema: { type: "array", items: { $ref: "#/definitions/Event" } } },
                    500: { description: "Failed to fetch events" }
                }
            }
        },
        "/v1/events/{id}": {
            get: {
                tags: ["events"],
                summary: "Get event by ID",
                description: "Returns a single event",
                operationId: "getEventById",
                produces: ["application/json"],
                parameters: [{ name: "id", in: "path", description: "ID of event to return", required: true, type: "integer" }],
                responses: {
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/Event" } },
                    500: { description: "Failed to fetch event" }
                }
            }
        },
        "/v1/students": {
            get: {
                tags: ["students"],
                summary: "Get all students",
                description: "Returns a list of all students",
                operationId: "getStudents",
                produces: ["application/json"],
                responses: {
                    200: { description: "Successful operation", schema: { type: "array", items: { $ref: "#/definitions/Student" } } },
                    500: { description: "Failed to fetch students" }
                }
            }
        },
        "/v1/students/{id}": {
            get: {
                tags: ["students"],
                summary: "Get student by ID",
                description: "Returns a single student",
                operationId: "getStudentById",
                produces: ["application/json"],
                parameters: [{ name: "id", in: "path", description: "ID of student to return", required: true, type: "integer" }],
                responses: {
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/Student" } },
                    500: { description: "Failed to fetch student" }
                }
            }
        },
        "/v1/jobs": {
            get: {
                tags: ["jobs"],
                summary: "Get all jobs",
                description: "Returns a list of all jobs",
                operationId: "getJobs",
                produces: ["application/json"],
                responses: {
                    200: { description: "Successful operation", schema: { type: "array", items: { $ref: "#/definitions/Job" } } },
                    500: { description: "Failed to fetch jobs" }
                }
            }
        },
        "/v1/jobs/{id}": {
            get: {
                tags: ["jobs"],
                summary: "Get job by ID",
                description: "Returns a single job",
                operationId: "getJobById",
                produces: ["application/json"],
                parameters: [{ name: "id", in: "path", description: "ID of job to return", required: true, type: "integer" }],
                responses: {
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/Job" } },
                    500: { description: "Failed to fetch job" }
                }
            }
        },
        "/v1/clubs": {
            get: {
                tags: ["clubs"],
                summary: "Get all clubs",
                description: "Returns a list of all clubs",
                operationId: "getClubs",
                produces: ["application/json"],
                responses: {
                    200: { description: "Successful operation", schema: { type: "array", items: { $ref: "#/definitions/Club" } } },
                    500: { description: "Failed to fetch clubs" }
                }
            }
        },
        "/v1/clubs/{id}": {
            get: {
                tags: ["clubs"],
                summary: "Get club by ID",
                description: "Returns a single club",
                operationId: "getClubById",
                produces: ["application/json"],
                parameters: [{ name: "id", in: "path", description: "ID of club to return", required: true, type: "integer" }],
                responses: {
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/Club" } },
                    500: { description: "Failed to fetch club" }
                }
            }
        },
        "/v1/notifications": {
            get: {
                tags: ["notifications"],
                summary: "Get all notifications",
                description: "Returns a list of all notifications",
                operationId: "getNotifications",
                produces: ["application/json"],
                responses: {
                    200: { description: "Successful operation", schema: { type: "array", items: { $ref: "#/definitions/Notification" } } },
                    500: { description: "Failed to fetch notifications" }
                }
            }
        },
        "/v1/profile": {
            get: {
                tags: ["profile"],
                summary: "Get user profile",
                description: "Returns the profile of the current user",
                operationId: "getProfile",
                produces: ["application/json"],
                responses: {
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/Profile" } },
                    500: { description: "Failed to fetch profile" }
                }
            }
        },
        "/v1/landing/banner": {
            get: {
                tags: ["landing"],
                summary: "Get all banners",
                description: "Returns all banner images and information",
                operationId: "getBanners",
                produces: ["application/json"],
                responses: {
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/BannerResponse" } },
                    404: { description: "No banners found" },
                    500: { description: "Failed to fetch banner data" }
                }
            }
        },
        "/v1/landing/logo": {
            get: {
                tags: ["landing"],
                summary: "Get all logos",
                description: "Returns all logo images and information",
                operationId: "getLogos",
                produces: ["application/json"],
                responses: {
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/LogoResponse" } },
                    404: { description: "No logos found" },
                    500: { description: "Failed to fetch logo data" }
                }
            }
        },
        "/v1/landing/other": {
            get: {
                tags: ["landing"],
                summary: "Get all other images",
                description: "Returns all other images and information",
                operationId: "getOtherImages",
                produces: ["application/json"],
                responses: {
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/OtherImageResponse" } },
                    404: { description: "No other images found" },
                    500: { description: "Failed to fetch other images data" }
                }
            }
        },
        "/v1/banners/save-multiple": {
            post: {
                tags: ["landing"],
                summary: "Save multiple banners",
                description: "Saves multiple banner images",
                operationId: "saveMultipleBanners",
                parameters: [
                    { name: "banners", in: "body", description: "Array of banner objects to save", required: true, schema: { type: "array", items: { $ref: "#/definitions/Banner" } } }
                ],
                responses: {
                    200: { description: "Banners saved successfully" },
                    500: { description: "Failed to save banners" }
                }
            }
        },
        "/v1/logos/save-multiple": {
            post: {
                tags: ["landing"],
                summary: "Save multiple logos",
                description: "Saves multiple logo images",
                operationId: "saveMultipleLogos",
                parameters: [
                    { name: "logos", in: "body", description: "Array of logo objects to save", required: true, schema: { type: "array", items: { $ref: "#/definitions/Logo" } } }
                ],
                responses: {
                    200: { description: "Logos saved successfully" },
                    500: { description: "Failed to save logos" }
                }
            }
        },
        "/v1/others/save-multiple": {
            post: {
                tags: ["landing"],
                summary: "Save multiple other images",
                description: "Saves multiple other images",
                operationId: "saveMultipleOther",
                parameters: [
                    { name: "others", in: "body", description: "Array of other image objects to save", required: true, schema: { type: "array", items: { $ref: "#/definitions/OtherImage" } } }
                ],
                responses: {
                    200: { description: "Other images saved successfully" },
                    500: { description: "Failed to save other images" }
                }
            }
        }
    },
    definitions: {
        Event: {
            type: "object",
            properties: {
                id: { type: "integer" },
                title: { type: "string" },
                descriptionVN: { type: "string" },
                descriptionEN: { type: "string" },
                start_datetime: { type: "string", format: "date-time" },
                end_datetime: { type: "string", format: "date-time" },
                location: { type: "string" },
                capacity: { type: "integer" },
                type: { type: "string" },
                status: { type: "string", enum: ["published", "cancelled"] },
                created_at: { type: "string", format: "date-time" },
                updated_at: { type: "string", format: "date-time" },
                image_url: { type: "string" },
                registration_deadline: { type: "string", format: "date-time" }
            }
        },
        Student: {
            type: "object",
            properties: {
                id: { type: "integer" },
                name: { type: "string" },
                student_code: { type: "string" }
            }
        },
        Job: {
            type: "object",
            properties: {
                id: { type: "integer" },
                title: { type: "string" },
                description: { type: "string" }
            }
        },
        Club: {
            type: "object",
            properties: {
                id: { type: "integer" },
                name: { type: "string" },
                description: { type: "string" }
            }
        },
        Notification: {
            type: "object",
            properties: {
                id: { type: "integer" },
                message: { type: "string" },
                created_at: { type: "string", format: "date-time" }
            }
        },
        Profile: {
            type: "object",
            properties: {
                id: { type: "integer" },
                username: { type: "string" },
                email: { type: "string" }
            }
        },
        BannerResponse: {
            type: "object",
            properties: {
                status: { type: "string" },
                success: { type: "boolean" },
                message: { type: "string" },
                data: { type: "array", items: { $ref: "#/definitions/Banner" } },
                count: { type: "integer" }
            }
        },
        Banner: {
            type: "object",
            properties: {
                id: { type: "integer" },
                image_url: { type: "string" }
            }
        },
        LogoResponse: {
            type: "object",
            properties: {
                status: { type: "string" },
                success: { type: "boolean" },
                message: { type: "string" },
                data: { type: "array", items: { $ref: "#/definitions/Logo" } },
                count: { type: "integer" }
            }
        },
        Logo: {
            type: "object",
            properties: {
                id: { type: "integer" },
                image_url: { type: "string" }
            }
        },
        OtherImageResponse: {
            type: "object",
            properties: {
                status: { type: "string" },
                success: { type: "boolean" },
                message: { type: "string" },
                data: { type: "array", items: { $ref: "#/definitions/OtherImage" } },
                count: { type: "integer" }
            }
        },
        OtherImage: {
            type: "object",
            properties: {
                id: { type: "integer" },
                image_url: { type: "string" }
            }
        }
    }
};

module.exports = spec;