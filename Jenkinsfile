pipeline {
    agent any
    stages {
        stage('Lint do Código Fonte') {
            steps {
                sh 'npm install' 
                sh 'npm run lint'  
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'  
            }
        }
        stage('Testes Unitários') {
            steps {
                sh 'npm test' 

                
                step([$class: 'JUnitPublisher', testResults: '**/test-results.xml'])

                publishHTML(
                    target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'coverage',
                        reportFiles: 'lcov-report/index.html',
                    ]
                )
            }
        }
    }
}
