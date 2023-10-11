pipeline {
    agent any
    tools {nodejs "Nodejs"}
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
      stage('Testes Unitarios') {
        steps {
          sh 'npx jest --outputFile=test-results.xml'
        }
      }
      stage('Publish JUnit Test Results') {
        steps {
          junit 'test-results.xml'
        }
      }
    }
}
