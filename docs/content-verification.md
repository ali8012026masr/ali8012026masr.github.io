# Content Verification & Feature Evidence Matrix

**Audit Date:** November 2026  
**Auditor:** Antigravity Engineering Assistant  
**Subject:** Mohammad Ali Sikder Ramim Portfolio Case Studies  
**Target Repositories:**
- `ali8012026masr/Horizon-All-in-one-Travel-Booking-Web-App`
- `ali8012026masr/Horizon-Angular-UI-Scaffold`
- `ali8012026masr/HorizonTourist`
- `ali8012026masr/bangla_akinator`

---

## 1. Verified Architecture & Version Manifests

### 1.1 Horizon Full-Stack Web App
* **Backend Framework:** Spring Boot `4.1.0` (Java `25` target in `pom.xml`, `spring-boot-starter-data-jpa`, `spring-boot-starter-validation`, `spring-boot-starter-security`).
* **JWT Implementation:** `io.jsonwebtoken:jjwt` `0.13.0`.
* **Security Architecture:**
  - Password hashing: BCrypt via `PasswordEncoderConfig.java`.
  - Token signing: Stateless JWT signed with HMAC-SHA using the user's BCrypt hash as the per-user secret key (`JwtService.java`). Password change automatically invalidates all issued tokens without needing a shared Redis blacklist.
  - Per-account lockout and two-factor flow handled via `AuthProvider.java` and `AuthFilter.java`.
* **Frontend Framework:** Angular `22.0.0`, TypeScript `6.0.2`, Angular standalone components, RxJS `7.8.0`, Vitest `4.0.8`.
* **Database & Persistence:** PostgreSQL 16 schema, JPA Auditing, Spring Data JPA repositories.
* **GIS & Mapping:** Leaflet `1.9.4` and HTML5 Geolocation API (`LocationController.java`, `LocationService.java`).
* **Reporting & Exporting:** `jspdf` `4.2.1` & `xlsx` `0.18.5`.
* **API Testing Suite:** Playwright automated test suite in `HorizonBackend/apitest/` covering authentication, authorization, token rotation, 2FA, account lockout, and IP blocking.

### 1.2 Bangla Akinator
* **Backend:** Python 3.11+, FastAPI (`0.115+`), MongoDB 7.0 (`motor` async driver).
* **Mathematical Foundations:**
  - Shannon Entropy: Expected Information Gain (EIG) greedy question selection (`question_selection.py`).
  - Bayesian Log-Probability Inference: Normalized via numerically stable `log-sum-exp` (`game_engine.py`).
* **Frontend Client:** Flutter 3.x, Riverpod state management, Bengali typography (Hind Siliguri).
* **Testing:** 26 automated unit and simulation tests in `akinator_backend/tests/` (verifying likelihood matrices, entropy calculations, and end-to-end game trajectories).

### 1.3 Horizon Tourist (Android Mobile)
* **Architecture:** Native Android (Java + XML Layouts).
* **Networking:** Retrofit HTTP client with `AuthInterceptor.java` communicating with the Horizon Spring Boot backend on port 58080.
* **Key Components:** Live GPS broadcaster, booking management, group coordination, and AI Concierge chat client.

---

## 2. Feature Evidence Matrix

| Project | Feature Area | Status | Verified Code Location |
| :--- | :--- | :--- | :--- |
| **Horizon** | Multi-Role RBAC (Tourist, Provider, Guide, Admin) | `Implemented` | `SecurityConfig.java`, `RoleGuard.ts`, role-specific controllers |
| **Horizon** | Per-User HMAC Token Signing & Lockout | `Implemented` | `JwtService.java`, `AuthProvider.java`, `AuthFilter.java` |
| **Horizon** | Gemini 3.6 Flash Context Grounding | `Implemented` | `AiChatController.java`, `AiChatService.java` (system prompts + DB catalog injection) |
| **Horizon** | Leaflet GIS Live Tour Guide Radar | `Implemented` | `LocationController.java`, `GuideBookingController.java`, Leaflet Angular components |
| **Horizon** | Group Split-Payments & Joining via Code | `Implemented` | `GroupController.java`, `GroupService.java`, `AttachGroupBookingRequest.java` |
| **Horizon** | Multi-Tenant Commission & Ledger Export | `Implemented` | `PaymentController.java`, `CommissionSearchRequest.java`, `table-export.ts` |
| **Horizon** | Automated API Security Test Suite | `Implemented` | `HorizonBackend/apitest/tests/*.spec.ts` (Playwright E2E) |
| **Horizon** | WebSocket STOMP Real-Time Telemetry | `Planned` | Roadmap item documented in README; HTTP polling currently active |
| **Bangla Akinator** | Information Gain (EIG) Question Selector | `Implemented` | `app/services/question_selection.py` & unit tests |
| **Bangla Akinator** | Bayesian Log-Sum-Exp Probability Engine | `Implemented` | `app/services/game_engine.py` & unit tests |
| **Bangla Akinator** | Community Contribution & Bengali Normalization | `Implemented` | `app/services/contribution_service.py` (`unicodedata.normalize`) |
| **Horizon Tourist** | Retrofit Android Client Integration | `Implemented` | `ApiClient.java`, `ApiService.java`, `AuthInterceptor.java` |

---

## 3. Interview-Defensible Claims Standard

1. **No generic marketing buzzwords:** Every claim points directly to a controller, service, or mathematical algorithm.
2. **Accurate security description:** Clear distinction between BCrypt password hashing and HMAC-SHA token signing using the hash as the dynamic key.
3. **Transparent roadmap demarcation:** Real-time WebSocket streaming is marked as `Planned`, while HTTP polling and Leaflet GPS beacons are tagged as `Implemented`.
