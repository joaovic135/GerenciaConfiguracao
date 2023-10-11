pipeline {
    agent any
    tools {
        nodejs "Nodejs"
    }
    stages {
        stage('Lint do Codigo Fonte') {
            steps {
                bat 'npm install'
                bat 'npm install eslint --save-dev'
                bat 'npx eslint .'
            }
        }
        stage('Build') {
            steps {
                echo 'Nenhum processo de construção necessário para JavaScript.'
            }
        }
        stage('Testes Unitários') {
            steps {
                sh 'npm install' 
                sh 'npm run test -- --coverage'
            }
            post {
                always {
                    junit 'reports/junit.xml' 
                    coberturaReport(
                        coberturaReportFile: 'coverage/lcov-report/lcov.info',
                        onlyStable: false,
                        autoUpdateHealth: false,
                        autoUpdateStability: false
                    ) 
                }
            }
        }
    }
}
