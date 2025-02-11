pipeline {
    agent any
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
}