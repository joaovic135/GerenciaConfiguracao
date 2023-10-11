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
        script {
        def testExitCode = bat returnStatus: true, script: 'npm run test'
        if (testExitCode != 0) {
          currentBuild.result = 'UNSTABLE'
        }
    }
      }
      post {
        always {
          junit 'output/coverage/junit/junit.xml' 
          step([$class: 'CoberturaPublisher', autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml', failUnhealthy: false, failUnstable: false, maxNumberOfBuilds: 0, onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false])
        }
      }
    }
  }
}
