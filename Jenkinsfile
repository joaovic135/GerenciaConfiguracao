pipeline {
    agent any
    stages {
        stage('Lint do Código Fonte') {
            steps {
                sh 'npm install eslint --save-dev'
                sh 'npx eslint .'
            }
        }
        stage('Build') {
            steps {
            }
        }
        stage('Testes Unitários') {
            steps {
                sh 'npm install jest --save-dev'
                sh 'npx jest'
            }
            post {
                always {
                    junit '**/test-results.xml'
                    publishHTML(target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'coverage',
                        reportFiles: 'index.html',
                    ])
                }
            }
        }
    }
}
