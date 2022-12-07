pipeline {
    agent any
    stages {
        stage('git repo & clean') {
            steps {
                bat "rmdir  /s /q Project"
                bat "git clone https://github.com/swaroop-2021/Project.git"
                bat "mvn clean -X Project"
            }
        }
        stage('install') {
            steps {
                bat "mvn install -X Project"
            }
        }
        stage('test') {
            steps {
                bat "mvn test -X Project"
            }
        }
        stage('package') {
            steps {
                bat "mvn package -X Project"
            }
        }
    }
}
