pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/sravanigunisetti1-prog/playwright-.git'
                }
            }
        stage('Install Playwright ') {
            steps {
                bat 'npm  playwright install'
            }
        }

        stage('Install Dependencies ') {
            steps {
                bat 'npm  playwright install'
            }
         stage('Run Test  ') {
            steps {
                bat 'call "C:\Users\prabh\OneDrive\Desktop\New Playwright\Playwright project new\pipeline.bat"
            }

        stage('Pusblish Reports ') {
            steps {
                PublishHTML([
                    reportDir: 'Playwright-report',
                    reportFiles: 'index.html'
                    reportName: 'Playwright Test Report'
                    keepAll: true, 
                    alwaysLinkToLastBuild: true,
                    allowMissing: false

                ])
            }
        }
       
    }

}   
