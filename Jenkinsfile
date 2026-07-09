@Library('Shared') _

pipeline {
    agent any

    parameters {
        string(name: 'FRONTEND_DOCKER_TAG', defaultValue: '', description: 'Setting docker image for latest push')
        string(name: 'BACKEND_DOCKER_TAG', defaultValue: '', description: 'Setting docker image for latest push')
    }

    stages {
        stage("Validate Parameters") {
            steps {
                script {
                    if (params.FRONTEND_DOCKER_TAG == '' || params.BACKEND_DOCKER_TAG == '') {
                        error("FRONTEND_DOCKER_TAG and BACKEND_DOCKER_TAG must be provided.")
                    }
                }
            }
        }
    
        stage('Code') {
            steps {
                echo 'Cloning Repository'
                git_checkout('main', "https://github.com/smanoj1215/basic_user_management.git")
            }
        }
    

           
        stage('Build') {
            steps {
                echo 'Building Image'
                dir('backend'){
                    build_img("smanoj1215", "user_mgmt_backend","${params.BACKEND_DOCKER_TAG}")
                }
                dir('frontend'){
                    build_img("smanoj1215", "user_mgmt_frontend","${params.FRONTEND_DOCKER_TAG}")
                }
                
            }
        }
        
        stage('Push Image') {
                steps {
                    push_img("smanoj1215", "user_mgmt_backend","${params.BACKEND_DOCKER_TAG}")
                    push_img("smanoj1215", "user_mgmt_frontend","${params.FRONTEND_DOCKER_TAG}")
                }
            }
        
        
        stage('Deploy') {
            steps {
                echo 'Deploying the Code'
                deploy()
            }
        }
    }
}