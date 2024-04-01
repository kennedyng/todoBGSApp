# Use a base image with OpenJDK installed
FROM openjdk:latest

# Set working directory
WORKDIR /app

# Copy the packaged jar file into the container
COPY target/your-spring-boot-app.jar app.jar

# Expose port 8080
EXPOSE 8080

# Specify the command to run the service
CMD ["java", "-jar", "app.jar"]
