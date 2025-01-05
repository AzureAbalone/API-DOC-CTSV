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
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/JobSuccess" } },
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
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/BannerSuccessResponse" } },
                    404: { description: "No banners found", schema: { $ref: "#/definitions/BannerNotFoundError" } },
                    500: { description: "Failed to fetch banner data", schema: { $ref: "#/definitions/BannerError" } }
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
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/LogoSuccessResponse" } },
                    404: { description: "No logos found", schema: { $ref: "#/definitions/LogoNotFoundError" } },
                    500: { description: "Failed to fetch logo data", schema: { $ref: "#/definitions/LogoError" } }
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
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/OtherImageSuccessResponse" } },
                    404: { description: "No other images found", schema: { $ref: "#/definitions/OtherImageNotFoundError" } },
                    500: { description: "Failed to fetch other images data", schema: { $ref: "#/definitions/OtherImageError" } }
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
                parameters: [
                    { name: "id", in: "path", description: "ID of student to return", required: true, type: "integer" }
                ],
                responses: {
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/StudentInfoSuccess" } },
                    401: { description: "Unauthorized", schema: { $ref: "#/definitions/StudentUnauthorizedError" } },
                    404: { description: "Student not found", schema: { $ref: "#/definitions/StudentNotFoundError" } },
                    500: { description: "Failed to fetch student info", schema: { $ref: "#/definitions/StudentError" } }
                }
            }
        },
        "/v1/verify-auth": {
            get: {
                tags: ["auth"],
                summary: "Verify authentication",
                description: "Verifies user authentication status by checking JWT token",
                operationId: "verifyAuth",
                produces: ["application/json"],
                responses: {
                    200: {
                        description: "Authentication status returned",
                        schema: { $ref: "#/definitions/VerifyAuthResponse" }
                    }
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
                parameters: [
                    { name: "id", in: "path", description: "ID of student", required: true, type: "integer" }
                ],
                responses: {
                    200: { description: "Allow status retrieved", schema: { $ref: "#/definitions/GetUpdateAllowSuccess" } },
                    404: { description: "Not found", schema: { $ref: "#/definitions/GetUpdateAllowNotFound" } },
                    500: { description: "Server error", schema: { $ref: "#/definitions/GetUpdateAllowError" } }
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
                    200: {
                        description: "Successful operation",
                        schema: { $ref: "#/definitions/AllStudentsSuccess" }
                    },
                    401: { description: "Unauthorized", schema: { $ref: "#/definitions/StudentUnauthorizedError" } },
                    500: { description: "Failed to fetch students", schema: { $ref: "#/definitions/AllStudentsError" } }
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
                parameters: [
                    {
                        name: "lang",
                        in: "query",
                        description: "Language for club information (vi/en)",
                        required: true,
                        type: "string",
                        default: "vi"
                    }
                ],
                responses: {
                    200: {
                        description: "Successful operation",
                        schema: {
                            type: "array",
                            items: { $ref: "#/definitions/Club" }
                        }
                    },
                    404: { description: "No clubs found", schema: { $ref: "#/definitions/ClubNotFoundError" } },
                    500: { description: "Failed to fetch clubs", schema: { $ref: "#/definitions/ClubError" } }
                }
            }
        },
        "/v1/events": {
            get: {
                tags: ["events"],
                summary: "Get all events",
                description: "Returns a list of all events",
                operationId: "getAllEvents",
                produces: ["application/json"],
                responses: {
                    200: {
                        description: "Successful operation",
                        schema: { $ref: "#/definitions/EventsSuccess" }
                    },
                    500: {
                        description: "Failed to fetch events",
                        schema: { $ref: "#/definitions/EventError" }
                    }
                }
            }
        },
        "/v1/events/{id}": {
            get: {
                tags: ["events"],
                summary: "Get event by ID",
                description: "Returns a single event by ID",
                operationId: "getEventById",
                produces: ["application/json"],
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        description: "ID of event to return",
                        required: true,
                        type: "integer"
                    }
                ],
                responses: {
                    200: { description: "Successful operation", schema: { $ref: "#/definitions/Event" } },
                    500: { description: "Failed to fetch event", schema: { $ref: "#/definitions/EventError" } }
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
                muc_luong: { type: "string" },
                noi_lam_viec: { type: "string" },
                so_luong: { type: "integer" },
                kinh_nghiem: { type: "string" },
                bang_cap: { type: "string" },
                vi_tri: { type: "string" },
                chuyen_nganh: { type: "string" },
                dai_dien: { type: "string" },
                dia_chi: { type: "string" },
                quyen_loi: { type: "string" },
                yeu_cau_cong_viec: { type: "string" },
                yeu_cau_ho_so: { type: "string" },
                imageURL: { type: "string" },
                createDate: { type: "string", format: "date-time" },
                updateDate: { type: "string", format: "date-time", nullable: true }
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
        LogoSuccessResponse: {
            type: "object",
            properties: {
                status: { type: "string", example: "success" },
                success: { type: "boolean", example: true },
                message: { type: "string", example: "Fetched logo data successfully" },
                data: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            imageId: { type: "integer" },
                            logoURL: { type: "string" },
                            createDate: { type: "string", format: "date-time" },
                            createBy: { type: "string" },
                            status: { type: "string" }
                        }
                    }
                },
                count: { type: "integer" }
            }
        },
        LogoNotFoundError: {
            type: "object",
            properties: {
                status: { type: "string", example: "error" },
                success: { type: "boolean", example: false },
                message: { type: "string", example: "No logos found" },
                error: { type: "string", example: "Không tìm thấy logo nào" },
                data: { type: "object", nullable: true, example: null }
            }
        },
        LogoError: {
            type: "object",
            properties: {
                status: { type: "string", example: "error" },
                success: { type: "boolean", example: false },
                message: { type: "string", example: "Failed to fetch logo data" },
                error: { type: "string", example: "Đã xảy ra lỗi khi lấy thông tin logo" },
                data: { type: "object", nullable: true, example: null }
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
                abbreviation: { type: "string" },
                fullName: { type: "string" },
                description: { type: "string" },
                facebookLink: { type: "string" },
                logoPath: { type: "string" },
                status: { type: "string", enum: ["active", "inactive"] },
                createdAt: { type: "string", format: "date-time" },
                updatedAt: { type: "string", format: "date-time" },
                groupId: { type: "integer" }
            }
        },
        ClubNotFoundError: {
            type: "object",
            properties: {
                success: { type: "boolean", example: false },
                message: { type: "string", example: "No clubs found" },
                error: { type: "string", example: "Không tìm thấy câu lạc bộ nào" }
            }
        },
        ClubError: {
            type: "object",
            properties: {
                success: { type: "boolean", example: false },
                message: { type: "string", example: "Failed to fetch clubs data" },
                error: { type: "string", example: "Đã xảy ra lỗi khi lấy thông tin câu lạc bộ" }
            }
        },
        BannerError: {
            type: "object",
            properties: {
                status: { type: "string", example: "error" },
                success: { type: "boolean", example: false },
                message: { type: "string", example: "Failed to fetch banner data" },
                error: { type: "string", example: "Đã xảy ra lỗi khi lấy thông tin banner" },
                data: { type: "object", nullable: true, example: null }
            }
        },
        BannerNotFoundError: {
            type: "object",
            properties: {
                status: { type: "string", example: "error" },
                success: { type: "boolean", example: false },
                message: { type: "string", example: "No banners found" },
                error: { type: "string", example: "Không tìm thấy banner nào" },
                data: { type: "object", nullable: true, example: null }
            }
        },
        BannerSuccessResponse: {
            type: "object",
            properties: {
                status: { type: "string", example: "success" },
                success: { type: "boolean", example: true },
                message: { type: "string", example: "Fetched banner data successfully" },
                data: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            imageId: { type: "integer" },
                            logoURL: { type: "string" },
                            createDate: { type: "string", format: "date-time" },
                            createBy: { type: "string" },
                            status: { type: "string" }
                        }
                    }
                },
                count: { type: "integer" }
            }
        },
        OtherImageSuccessResponse: {
            type: "object",
            properties: {
                status: { type: "string", example: "success" },
                success: { type: "boolean", example: true },
                message: { type: "string", example: "Fetched ortherImages data successfully" },
                data: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            imageId: { type: "integer" },
                            logoURL: { type: "string" },
                            createDate: { type: "string", format: "date-time" },
                            createBy: { type: "string" },
                            status: { type: "string" }
                        }
                    }
                },
                count: { type: "integer" }
            }
        },
        OtherImageNotFoundError: {
            type: "object",
            properties: {
                status: { type: "string", example: "error" },
                success: { type: "boolean", example: false },
                message: { type: "string", example: "No ortherImages found" },
                error: { type: "string", example: "Không tìm thấy logo nào" },
                data: { type: "object", nullable: true, example: null }
            }
        },
        OtherImageError: {
            type: "object",
            properties: {
                status: { type: "string", example: "error" },
                success: { type: "boolean", example: false },
                message: { type: "string", example: "Failed to fetch ortherImages data" },
                error: { type: "string", example: "Đã xảy ra lỗi khi lấy thông tin ortherImages" },
                data: { type: "object", nullable: true, example: null }
            }
        },
        StudentInfoSuccess: {
            type: "object",
            properties: {
                success: { type: "boolean", example: true },
                studentData: {
                    type: "object",
                    properties: {
                        fullName: { type: "string" },
                        email: { type: "string" },
                        phone: { type: "string" },
                        class: { type: "string" },
                        major: { type: "string" },
                        educationLevel: { type: "string" },
                        typeOfTraining: { type: "string" },
                        role: { type: "string" }
                    }
                },
                studentDetails: {
                    type: "object",
                    properties: {
                        student_code: { type: "string" },
                        intake_year: { type: "integer" },
                        current_semester: { type: "integer" },
                        status: { type: "string" },
                        dob: { type: "string", format: "date-time" },
                        pob: { type: "string" },
                        gender: { type: "string" },
                        nationality: { type: "string" },
                        ethnicity: { type: "string" },
                        religion: { type: "string" },
                        id_number: { type: "string" },
                        perm_address: { type: "string" },
                        current_address: { type: "string" },
                        emergency_contact: { type: "string" },
                        emergency_phone: { type: "string" },
                        union_date: { type: "string", format: "date-time" },
                        party_date: { type: "string", format: "date-time", nullable: true },
                        insurance_number: { type: "string" },
                        policy_benefit: { type: "string" },
                        father_fullname: { type: "string" },
                        father_yob: { type: "integer" },
                        father_nationality: { type: "string" },
                        father_ethnicity: { type: "string" },
                        father_religion: { type: "string" },
                        father_occupation: { type: "string" },
                        father_workplace: { type: "string" },
                        father_perm_address: { type: "string" },
                        father_contact: { type: "string" },
                        mother_fullname: { type: "string" },
                        mother_yob: { type: "integer" },
                        mother_nationality: { type: "string" },
                        mother_ethnicity: { type: "string" },
                        mother_religion: { type: "string" },
                        mother_occupation: { type: "string" },
                        mother_workplace: { type: "string" },
                        mother_perm_address: { type: "string" },
                        mother_contact: { type: "string" },
                        total_score: { type: "string" },
                        assessment_status: { type: "string" },
                        submitted_at: { type: "string", format: "date-time" },
                        reviewed_at: { type: "string", format: "date-time", nullable: true },
                        approved_at: { type: "string", format: "date-time", nullable: true },
                        assessment_created_at: { type: "string", format: "date-time" },
                        assessment_updated_at: { type: "string", format: "date-time" }
                    }
                }
            }
        },
        StudentUnauthorizedError: {
            type: "object",
            properties: {
                success: { type: "boolean", example: false },
                error: { type: "string", example: "Chưa xác thực tài khoản hoặc phiên đăng nhập không hợp lệ" }
            }
        },
        StudentNotFoundError: {
            type: "object",
            properties: {
                success: { type: "boolean", example: false },
                error: { type: "string", example: "Không tìm thấy sinh viên" }
            }
        },
        StudentError: {
            type: "object",
            properties: {
                success: { type: "boolean", example: false },
                error: { type: "string", example: "Đã xảy ra lỗi khi lấy thông tin sinh viên" }
            }
        },
        GetUpdateAllowSuccess: {
            type: "object",
            properties: {
                success: { type: "boolean", example: true },
                allow_update: { type: "integer", example: 0 }
            }
        },
        GetUpdateAllowNotFound: {
            type: "object",
            properties: {
                success: { type: "boolean", example: false },
                message: { type: "string", example: "Status not found" }
            }
        },
        GetUpdateAllowError: {
            type: "object",
            properties: {
                success: { type: "boolean", example: false },
                message: { type: "string", example: "Internal server error" }
            }
        },
        AllStudentsSuccess: {
            type: "object",
            properties: {
                success: { type: "boolean", example: true },
                data: {
                    type: "array",
                    items: { $ref: "#/definitions/StudentDetail" }
                }
            }
        },
        StudentDetail: {
            type: "object",
            properties: {
                id: { type: "integer" },
                user_id: { type: "integer" },
                student_code: { type: "string" },
                intake_year: { type: "integer" },
                current_semester: { type: "integer" },
                status: { type: "string", enum: ["active", "suspended"] },
                created_at: { type: "string", format: "date-time" },
                updated_at: { type: "string", format: "date-time" },
                class: { type: "string" },
                major: { type: "string" },
                education_level: { type: "string" },
                type_of_training: { type: "string" },
                full_name: { type: "string" }
            }
        },
        AllStudentsError: {
            type: "object",
            properties: {
                success: { type: "boolean", example: false },
                error: { type: "string", example: "Đã xảy ra lỗi khi lấy dữ liệu sinh viên" }
            }
        },
        EventError: {
            type: "object",
            properties: {
                error: { type: "string", example: "Failed to fetch events" }
            }
        },
        VerifyAuthResponse: {
            type: "object",
            properties: {
                isAuthenticated: {
                    type: "boolean",
                    description: "Indicates whether the user is authenticated",
                    example: false
                }
            }
        }
    }
};

module.exports = spec;