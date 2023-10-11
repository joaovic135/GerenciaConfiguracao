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
          echo 'Nenhum processo de construcao necessario para JavaScript.'
      }
    }
    stage('Testes Unitarios') {
      steps {
          bat 'npm install'
      }
      post {
        always {
          junit 'output/coverage/junit/junit.xml' 
            publishHTML(
            target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'output/coverage/jest',
                reportFiles: 'index.html',
            ]
          ) 
        }
      }
    }
  }
}
