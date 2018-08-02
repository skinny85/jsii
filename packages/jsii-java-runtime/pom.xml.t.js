const packageInfo = require('./package.json');
const { groupId, artifactId, version } = require('./lib').maven;

process.stdout.write(`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <!-- Generated by ${__filename} at ${new Date().toISOString()} -->

    <groupId>${groupId}</groupId>
    <artifactId>${artifactId}</artifactId>
    <version>${version}</version>

    <name>\${project.groupId}:\${project.artifactId}</name>
    <description>${packageInfo.description}</description>
    <url>${packageInfo.homepage}</url>

    <scm>
        <connection>scm:${packageInfo.repository.type}:${packageInfo.repository.url}</connection>
        <developerConnection>scm:${packageInfo.repository.type}:${packageInfo.repository.url}</developerConnection>
        <url>${packageInfo.repository.url.replace(`${packageInfo.repository.type}:`, 'https:')}</url>
    </scm>

    <licenses>
        <license>
            <name>Apache License 2.0</name>
            <url>http://www.apache.org/licenses/LICENSE-2.0</url>
            <distribution>repo</distribution>
            <comments>An OSI-approved license</comments>
        </license>
    </licenses>

    <developers>
        <developer>
            <name>${packageInfo.author.name}</name>
            <email>${packageInfo.author.email}</email>
            <organization>${packageInfo.author.name}</organization>
            <organizationUrl>${packageInfo.author.url}</organizationUrl>
        </developer>
    </developers>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-core -->
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-core</artifactId>
            <version>2.9.5</version>
        </dependency>

        <!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind -->
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.9.5</version>
        </dependency>

        <!-- https://mvnrepository.com/artifact/com.google.guava/guava-io -->
        <dependency>
            <groupId>com.google.guava</groupId>
            <artifactId>guava-io</artifactId>
            <version>r03</version>
        </dependency>

        <!-- https://mvnrepository.com/artifact/com.google.code.findbugs/jsr305 -->
        <dependency>
            <groupId>com.google.code.findbugs</groupId>
            <artifactId>jsr305</artifactId>
            <version>[3.0.2,)</version>
        </dependency>

        <!-- https://mvnrepository.com/artifact/javax.annotation/javax.annotation-api -->
        <dependency>
            <groupId>javax.annotation</groupId>
            <artifactId>javax.annotation-api</artifactId>
            <version>[1.2,)</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.6.1</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>

            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-source-plugin</artifactId>
                <version>3.0.1</version>
                <executions>
                    <execution>
                        <id>attach-sources</id>
                        <goals>
                            <goal>jar</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>

            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-javadoc-plugin</artifactId>
                <version>3.0.1</version>
                <executions>
                    <execution>
                        <id>attach-javadocs</id>
                        <goals>
                            <goal>jar</goal>
                        </goals>
                    </execution>
                </executions>
                <configuration>
                    <failOnWarnings>true</failOnWarnings>
                    <show>protected</show>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
`);
