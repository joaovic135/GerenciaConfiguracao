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
            }
            post {
                always {
                    junit 'output/coverage/junit/junit.xml' 
                    coberturaCoberturaReport(
                        coberturaReportFile: 'output/coverage/jest/cobertura/coverage.xml',
                        onlyStable: false,
                        autoUpdateHealth: false,
                        autoUpdateStability: false
                    ) 
                }
            }
        }
    }
}
