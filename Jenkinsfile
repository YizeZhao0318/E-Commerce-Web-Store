pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/YizeZhao0318/E-Commerce-Web-Store', branch: 'master')
      }
    }

    stage('Log') {
      parallel {
        stage('Log') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Front-End Unit Tests') {
          steps {
            sh 'npm i && npm run test:unit'
          }
        }

      }
    }

  }
}