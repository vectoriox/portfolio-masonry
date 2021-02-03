pipeline{
    
    agent any
    
    environment{
        dockerImage = ''
        registry= 'ioxweb/portfolio-masonry'
        dockerHubCred = 'dockerhub-id'
        BUILDVERSION = sh(script: "echo `date +%s`", returnStdout: true).trim()
    }
    stages{
        stage('checkout'){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'github-id', url: 'https://github.com/vectoriox/portfolio-masonry.git']]])
            }
        }
      stage('Helm Pack and Push'){
        agent {
          docker { 
              image 'ioxweb/iox-executor:1.0.0' 
              args '-e TEST=${dockerHubCred}'
            }
        }
        steps {
                sh 'node --version'
                sh 'echo $TEST'
        }
      }
    }
}
