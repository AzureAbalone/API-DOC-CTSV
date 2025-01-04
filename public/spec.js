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
        { name: "jobs", description: "Job management operations" },
        { name: "landing", description: "Landing page content operations" },
        { name: "students", description: "Student management operations" },
        { name: "clubs", description: "Club management operations" },
        { name: "events", description: "Event management operations" },
        { name: "auth", description: "Authentication operations" }
    ],
    schemes: ["http", "https"],
    paths: {
        "/v1/jobs": {
            get: {
                tags: ["jobs"],
                summary: "Get all recruitments",
                description: "Returns a list of all job recruitments",
                operationId: "getAllRecruitments",
                produces: ["application/json"],
                responses: {
                    200: { description: "Successful operation", schema: { type: "array", items: { $ref: "#/definitions/JobSuccess" } } },
                    500: { description: "Lỗi truy xuất dữ liệu", schema: { $ref: "#/definitions/JobError" } }
                }
            }
        },
        "/v1/banner": {
            get: {
                tags: ["landing"],
                summary: "Get all banners",
                description: "Returns all banner images and information",
                operationId: "APIBanner",
                produces: ["application/json"],
                responses: {
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/BannerResponse" } },
                    404: { description: "No banners found" },
                    500: { description: "Failed to fetch banner data" }
                }
            }
        },
        "/v1/logo": {
            get: {
                tags: ["landing"],
                summary: "Get all logos",
                description: "Returns all logo images and information",
                operationId: "APILogo",
                produces: ["application/json"],
                responses: {
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/LogoResponse" } },
                    404: { description: "No logos found" },
                    500: { description: "Failed to fetch logo data" }
                }
            }
        },
        "/v1/other": {
            get: {
                tags: ["landing"],
                summary: "Get all other images",
                description: "Returns all other images and information",
                operationId: "APIorther",
                produces: ["application/json"],
                responses: {
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/OtherImageResponse" } },
                    404: { description: "No other images found" },
                    500: { description: "Failed to fetch other images data" }
                }
            }
        },
        "/v1/info/{id}": {
            get: {
                tags: ["students"],
                summary: "Get student info by ID",
                description: "Returns student information",
                operationId: "studentInfo",
                produces: ["application/json"],
                parameters: [{ name: "id", in: "path", description: "ID of student to return", required: true, type: "integer" }],
                responses: {
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/Student" } },
                    500: { description: "Failed to fetch student info" }
                }
            }
        },
        "/v1/verify-auth": {
            get: {
                tags: ["auth"],
                summary: "Verify authentication",
                description: "Verifies user authentication",
                operationId: "verifyAuth",
                produces: ["application/json"],
                responses: {
                    200: { description: "Authentication verified" },
                    401: { description: "Unauthorized" }
                }
            }
        },
        "/v1/{id}/update-allow": {
            get: {
                tags: ["students"],
                summary: "Update allow status by ID",
                description: "Updates the allow status of a student",
                operationId: "updateAllow",
                parameters: [{ name: "id", in: "path", description: "ID of student", required: true, type: "integer" }],
                responses: {
                    200: { description: "Allow status updated" },
                    500: { description: "Failed to update allow status" }
                }
            }
        },
        "/v1/getUpdateAllow/{id}": {
            get: {
                tags: ["students"],
                summary: "Get update allow status by ID",
                description: "Returns the update allow status of a student",
                operationId: "getUpdateAllow",
                parameters: [{ name: "id", in: "path", description: "ID of student", required: true, type: "integer" }],
                responses: {
                    200: { description: "Allow status retrieved" },
                    500: { description: "Failed to retrieve allow status" }
                }
            }
        },
        "/v1/allStudent": {
            get: {
                tags: ["students"],
                summary: "Get all students",
                description: "Returns a list of all students",
                operationId: "getAllStudent",
                produces: ["application/json"],
                responses: {
                    200: { description: "Successful operation", schema: { type: "array", items: { $ref: "#/definitions/Student" } } },
                    500: { description: "Failed to fetch students" }
                }
            }
        },
        "/v1/clubs": {
            get: {
                tags: ["clubs"],
                summary: "Get all clubs",
                description: "Returns a list of all clubs",
                operationId: "fetchClubInLang",
                produces: ["application/json"],
                responses: {
                    200: { description: "Successful operation", schema: { type: "array", items: { $ref: "#/definitions/Club" } } },
                    500: { description: "Failed to fetch clubs" }
                }
            }
        },
        "/v1/events": {
            get: {
                tags: ["events"],
                summary: "Get all events",
                description: "Returns a list of all events",
                operationId: "eventAPI",
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
                operationId: "eventDetailAPI",
                produces: ["application/json"],
                parameters: [{ name: "id", in: "path", description: "ID of event to return", required: true, type: "integer" }],
                responses: {
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/Event" } },
                    500: { description: "Failed to fetch event" }
                }
            }
        },
        "/v1/search": {
            get: {
                tags: ["search"],
                summary: "Search API",
                description: "Performs a search operation",
                operationId: "search",
                produces: ["application/json"],
                responses: {
                    200: { description: "Search successful" },
                    500: { description: "Search failed" }
                }
            }
        },
        "/v1/login": {
            post: {
                tags: ["auth"],
                summary: "Student login",
                description: "Logs in a student",
                operationId: "studentLogin",
                parameters: [
                    { name: "body", in: "body", description: "Login credentials", required: true, schema: { type: "object", properties: { username: { type: "string" }, password: { type: "string" } } } }
                ],
                responses: {
                    200: { description: "Login successful" },
                    401: { description: "Unauthorized" }
                }
            }
        },
        "/v1/logout": {
            post: {
                tags: ["auth"],
                summary: "Student logout",
                description: "Logs out a student",
                operationId: "studentLogout",
                responses: {
                    200: { description: "Logout successful" }
                }
            }
        },
        "/v1/change-password/{id}": {
            post: {
                tags: ["auth"],
                summary: "Change password",
                description: "Changes the password for a student",
                operationId: "changePass",
                parameters: [
                    { name: "id", in: "path", description: "ID of student", required: true, type: "integer" },
                    { name: "body", in: "body", description: "New password", required: true, schema: { type: "object", properties: { newPassword: { type: "string" } } } }
                ],
                responses: {
                    200: { description: "Password changed successfully" },
                    500: { description: "Failed to change password" }
                }
            }
        },
        "/v1/receiveOTP": {
            post: {
                tags: ["auth"],
                summary: "Receive OTP",
                description: "Receives an OTP for verification",
                operationId: "receiveOTP",
                parameters: [
                    { name: "body", in: "body", description: "OTP request details", required: true, schema: { type: "object", properties: { phoneNumber: { type: "string" } } } }
                ],
                responses: {
                    200: { description: "OTP sent successfully" },
                    500: { description: "Failed to send OTP" }
                }
            }
        },
        "/v1/verify-otp/{id}": {
            post: {
                tags: ["auth"],
                summary: "Verify OTP",
                description: "Verifies the OTP for password reset",
                operationId: "forgotPass",
                parameters: [
                    { name: "id", in: "path", description: "ID of student", required: true, type: "integer" },
                    { name: "body", in: "body", description: "OTP and new password", required: true, schema: { type: "object", properties: { otp: { type: "string" }, newPassword: { type: "string" } } } }
                ],
                responses: {
                    200: { description: "OTP verified and password reset" },
                    500: { description: "Failed to verify OTP" }
                }
            }
        }
    },
    definitions: {
        JobSuccess: {
            type: "object",
            properties: {
                id: { type: "integer" },
                title: { type: "string" },
                description: { type: "string" }
            }
        },
        JobError: {
            type: "object",
            properties: {
                error: { type: "string", example: "Lỗi truy xuất dữ liệu" }
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
        },
        Student: {
            type: "object",
            properties: {
                id: { type: "integer" },
                name: { type: "string" },
                student_code: { type: "string" }
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
        }
    }
};

module.exports = spec;