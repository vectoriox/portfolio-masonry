pipeline{
    
    agent any
    
    environment{
        dockerImage = ''
        REPO_NAME= 'portfolio-masonry'
        dockerHubCred = 'dockerhub-id'
        GITHUB_CRED = credentials('github-id')
        BUILDVERSION = sh(script: "echo `date +%s`", returnStdout: true).trim()
        gitUrl = env.GIT_URL.replaceFirst("^(http[s]?://www\\.|http[s]?://|www\\.)","")
    }
    stages{
      stage('checkout'){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: env.GIT_BRANCH]], 
                doGenerateSubmoduleConfigurations: false, extensions: [],
                submoduleCfg: [],
                userRemoteConfigs: [[credentialsId: 'github-id', url: env.GIT_URL]]])
            }
      }
      stage('Docker Build'){
            steps{
              script{
                 dockerImage =  docker.build "ioxweb/${REPO_NAME}:${env.GIT_BRANCH}-${env.BUILDVERSION}-${env.BUILD_ID}"
              }
            }
      }
      stage('Dockerhub Push Image'){
        steps{
          script{
            docker.withRegistry('', 'dockerhub-id'){
              dockerImage.push()
            }            
          }
        }
      }
      stage('Helm Pack and Push'){
        agent {
          docker { 
              image 'ioxweb/iox-executor:1.0.1' 
              args '-e GITHUB_CRED_PSW=${GITHUB_CRED_PSW} -e GITHUB_URL=${gitUrl} -e REPO_NAME=${REPO_NAME}'
            }
        }
        steps {
                sh '''
                  cd ~
                  if [ -d "$REPO_NAME" ]; then rm -Rf $REPO_NAME; fi
                  if [ -d iox-helm-repo ]; then rm -Rf $REPO_NAME; fi
                  git clone "https://${GITHUB_CRED_PSW}:x-oauth-basic@${GITHUB_URL}"
                  git clone https://x-access-token:${GITHUB_CRED_PSW}@github.com/vectoriox/iox-helm-repo.git
                  cd ~/${REPO_NAME}
                  mkdir -p ~/iox-helm-repo/${REPO_NAME}
                  helm package ./chart  -d ~/iox-helm-repo/${REPO_NAME}
                  cd ~/iox-helm-repo
                  git add .
                  git commit -m "${REPO_NAME} new helm pack"
                  git push
                '''

        }
      }
    }
}
