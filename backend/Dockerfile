FROM gradle:8.8.0-jdk21-alpine AS build
WORKDIR /home/gradle/src
COPY build.gradle settings.gradle ./
COPY gradle ./gradle
COPY gradlew .
COPY src ./src
RUN gradle build -x test --no-daemon

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /home/gradle/src/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"] 