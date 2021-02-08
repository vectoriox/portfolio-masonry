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
      stage('Print Env'){
        steps{
          sh 'printenv'
        }
      }  
      stage('Helm Pack and Push'){
        agent {
          docker { 
              image 'ioxweb/iox-executor:1.0.0' 
              args '-e GITHUB_CRED_PSW=${GITHUB_CRED_PSW} -e GITHUB_URL=${gitUrl} -e REPO_NAME=${REPO_NAME}'
            }
        }
        steps {
                sh '''
                  cd ~
                  ls
                  if [ -d "$REPO_NAME" ]; then rm -Rf $REPO_NAME; fi
                  if [ -d iox-helm-repo ]; then rm -Rf $REPO_NAME; fi

                  git clone "https://${GITHUB_CRED_PSW}:x-oauth-basic@${GITHUB_URL}"
                  sleep 5
                  ls
                  git clone https://x-access-token:${GITHUB_CRED_PSW}@github.com/vectoriox/iox-helm-repo.git
                  echo '2'
                  cd ~/${REPO_NAME}
                  echo '3'
                  mkdir -p ~/iox-helm-repo/${REPO_NAME}
                  helm package ./chart  -d ~/iox-helm-repo/${REPO_NAME}
                  echo '4'
                  cd ~/iox-helm-repo
                  echo '5'
                  git add .
                  echo '6'
                  git commit -m '${REPO_NAME} new helm pack'
                  echo '7'
                  git push
                '''

        }
      }
    }
}
