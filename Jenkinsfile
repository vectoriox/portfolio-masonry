pipeline{
    
    agent any
    
    environment{
        dockerImage = ''
        registry= 'ioxweb/portfolio-masonry'
        dockerHubCred = 'dockerhub-id'
        githubToken = credentials('github-id')
        BUILDVERSION = sh(script: "echo `date +%s`", returnStdout: true).trim()
    }
    stages{
        stage('checkout'){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], 
                doGenerateSubmoduleConfigurations: false, extensions: [],
                submoduleCfg: [],
                userRemoteConfigs: [[credentialsId: 'github-id', url: 'https://github.com/vectoriox/portfolio-masonry.git']]])
            }
        }
      stage('Print Env'){
        steps{
          sh 'printenv'
        }
      }  
      stage('Helm Pack and Push'){
        agent {
          docker { 
              image 'ioxweb/iox-executor:1.0.0' 
              args '-e TEST=${githubToken}'
            }
        }
        steps {
                sh 'node --version'
                sh 'echo $TEST'
        }
      }
    }
}
