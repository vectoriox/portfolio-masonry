pipeline{
    
    agent any
    
    environment{
        dockerImage = ''
        registry= 'ioxweb/portfolio-masonry'
        BUILDVERSION = sh(script: "echo `date +%s`", returnStdout: true).trim()
    }
    stages{
        stage('checkout'){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'github-id', url: 'https://github.com/vectoriox/portfolio-masonry.git']]])
            }
        }
        stage('Docker Build'){
            steps{
                 echo "Build ID:  ${env.BUILD_ID}"
                 echo "BUILD_TAG: ${env.BUILD_TAG}"
                 echo "BUILD_TIMESTAMP: ${env.BUILD_TIMESTAMP}"
                 echo "GIT_BRANCH: ${env.GIT_BRANCH}"
                 echo "BUILDVERSION: ${env.BUILDVERSION}"
            }
        }
    }
}
