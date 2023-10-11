pipeline {
    agent any
    tools {nodejs "Nodejs"}
    stages {
        stage('Lint do Código Fonte') {
            steps {
                bat 'npm install'
                bat 'npm install eslint --save-dev'
                bat 'npx eslint .'
            }
        }
        
    }
}
