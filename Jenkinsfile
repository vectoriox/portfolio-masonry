pipeline{
    
    agent any
    
    environment{
        dockerImage = ''
        REPO_NAME= 'portfolio-masonry'
        dockerHubCred = 'dockerhub-id'
        GITHUB_TOKEN = credentials('github-id')
        BUILDVERSION = sh(script: "echo `date +%s`", returnStdout: true).trim()
        gitUrl = sh(script:"echo ${GIT_URL}", , returnStdout: true).replaceFirst("^(http[s]?://www\\.|http[s]?://|www\\.)","")
    }
    stages{
        stage('checkout'){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/${GIT_BRANCH}']], 
                doGenerateSubmoduleConfigurations: false, extensions: [],
                submoduleCfg: [],
                userRemoteConfigs: [[credentialsId: 'github-id', url: '${GIT_URL}']]])
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
              args '-e GITHUB_TOKEN=${GITHUB_TOKEN} -e GIT_URL=${gitUrl} -e REPO_NAME=${REPO_NAME}'
            }
        }
        steps {
                sh '''

                    git clone https://${GITHUB_TOKEN}:x-oauth-basic@${GIT_URL}
                    echo '1'
                    git clone https://${GITHUB_TOKEN}:x-oauth-basic@github.com/vectoriox/iox-helm-repo.git
                    echo '2'
                    cd ${REPO_NAME}
                    echo '3'
                    helm package ~/iox-helm-repo/${REPO_NAME}
                    echo '4'
                    cd ~/iox-helm-repo
                    echo '5'
                    git add .
                    echo '6'
                    git commit -m '${REPO_NAME} new chart'
                    echo '7'
                    git push
                '''

        }
      }
    }
}
