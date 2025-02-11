pipeline {
    agent any

    triggers {
        pollSCM('H/5 * * * *')
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://tu-repo.git' // O usa `checkout scm`
            }
        }
        stage('Instalar Dependencias') {
            steps {
                sh 'npm install'
            }
        }
        stage('Compilar') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Pruebas') {
            steps {
                sh 'npm test'
            }
        }
        stage('Despliegue') {
            steps {
                echo 'Aquí iría el despliegue'
            }
        }
    }

    post {
        always {
            cleanWs() // Limpia el workspace después de la ejecución
        }
        success {
            echo 'Build successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}