#Use Maven to build the application
FROM maven:3.9.8-eclipse-temurin-21 AS build


# Set the working directory for the build
WORKDIR /app

# Copy the Maven project files
COPY pom.xml .
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# Use minimal Jaav runtime for the final image
FROM openjdk:21-jdk-slim

# Add volume to hold the application data
VOLUME /tmp

# Application's jar file directory
ARG JAR_FILE=target/inventoryManagement-0.0.1-SNAPSHOT.jar

# Copy the jar file from the build stage to the final image
COPY --from=build /app/${JAR_FILE} app.jar

# The application's jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
