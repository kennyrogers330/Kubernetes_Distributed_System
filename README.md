# Student Scores Web Application

### Tasks
1. **Virtualization and Dockerization:**
    - [x] Create a virtual machine using any virtualization software (like VirtualBox, VMware, etc.). Install a Linux-based operating system on it.
    - [x] Install Docker on the virtual machine.
    - [x] Create a Dockerfile that builds an image for a simple web application     that accepts user input – Name, andrewID, course grade etc. (you can use any language stack of your choice).
    - [x] Build the Docker image and run it as a container on your virtual machine.
    - [x] Ensure that you can access the web application from your host machine.
2. **Cloud and Kubernetes (k8s):**
    - [x] setup and configure Kubernetes on any cloud service provider (AKS, EKS or GKE) of your choice.
    - [ ] Deploy your Dockerized web application on the Kubernetes cluster (as a deployment k8s resource).
    - [ ] Assign to your application a load balancer service type, so it can be accessible over the internet.
    - [ ] Implement a rolling update strategy for your application and demonstrate it.
3. **Cloud Storage with Cassandra:**
    - [ ] Set up Cassandra databases in the cloud (as a deployment in your k8s with minimum of two replicas).
    - [ ] Modify your web application to accept the users' input from the simple web application and store this data in the Cassandra database.
    - [ ] Implement a feature in your web application that uses the stored data in the Cassandra database (e.g another web page that can be used to query the database to display what is saved).