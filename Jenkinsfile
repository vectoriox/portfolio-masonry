pipeline{
    
    agent any
    
    environment{
        dockerImage = ''
        registry= 'ioxweb/portfolio-masonry'
    }
    stages{
        stage('checkout'){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'github-id', url: 'https://github.com/vectoriox/portfolio-masonry.git']]])
            }
        }
        stage('Docker Build'){
            steps{
                 echo "Build ID:  ${env.DB_ENGINE}"
                 echo "BUILD_TAG: ${env.BUILD_TAG}"
                 echo "TAG_TIMESTAMP: ${env.TAG_TIMESTAMP}"
                 echo "TAG_UNIXTIME: ${env.TAG_UNIXTIME}"
                 echo "TAG_DATE: ${env.TAG_DATE}"
                 echo "BUILD_NUMBER: ${env.BUILD_NUMBER}"
            }
        }
    }
}
