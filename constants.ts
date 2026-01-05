
import { Question, ExamSection } from './types';

export const ALL_QUESTIONS: Question[] = [
  // SECTION 1: Environment Setup (~23%)
  {
    id: "s1-q1",
    section: ExamSection.SETUP,
    text: "You are setting up a Google Cloud organization and want to apply a policy that prevents the creation of external IP addresses for all projects. Where should you apply this policy to ensure inheritance?",
    options: [
      "At the Project level for each individual project",
      "At the Folder or Organization level in the Resource Hierarchy",
      "In the IAM role definition",
      "In the Billing Account settings"
    ],
    correctAnswerIndex: 1,
    explanation: "Organizational policies are applied to nodes in the resource hierarchy (Organization, Folders, Projects) and are inherited by all resources below them."
  },
  {
    id: "s1-q2",
    section: ExamSection.SETUP,
    text: "A new developer needs to view the contents of a Cloud Storage bucket. Which IAM role provides the minimum necessary permissions for this task?",
    options: [
      "roles/storage.admin",
      "roles/storage.objectViewer",
      "roles/viewer",
      "roles/storage.objectCreator"
    ],
    correctAnswerIndex: 1,
    explanation: "roles/storage.objectViewer allows users to view objects and their metadata, following the principle of least privilege."
  },
  {
    id: "s1-q3",
    section: ExamSection.SETUP,
    text: "Your company wants to track costs specifically for its 'Marketing' department across three different projects. What is the best way to achieve this in Billing?",
    options: [
      "Create three separate Billing Accounts",
      "Use Labels on resources and use them in Billing Exports",
      "Use different Organization nodes for each department",
      "Ask Google Support to split the invoice manually"
    ],
    correctAnswerIndex: 1,
    explanation: "Labels are key-value pairs that can be attached to resources. These labels are included in billing exports to BigQuery, allowing for granular cost analysis."
  },
  {
    id: "s1-q4",
    section: ExamSection.SETUP,
    text: "You need to ensure that a specific project cannot exceed its monthly budget. What feature should you use?",
    options: [
      "Budget alerts with Pub/Sub for automated cost capping",
      "The 'Stop Project' checkbox in Billing settings",
      "Quotas set to $0",
      "Hard limits in the Organization Policy"
    ],
    correctAnswerIndex: 0,
    explanation: "While budgets don't stop usage by default, you can connect them to Pub/Sub to trigger a Cloud Function that disables billing or shuts down resources."
  },
  {
    id: "s1-q5",
    section: ExamSection.SETUP,
    text: "What tool allows you to search for all resources across your Google Cloud organization by attribute or metadata?",
    options: ["Cloud Asset Inventory", "Resource Manager", "Cloud Debugger", "Gemini Cloud Assist"],
    correctAnswerIndex: 0,
    explanation: "Cloud Asset Inventory provides a centralized view of all GCP resources and their history."
  },
  {
    id: "s1-q6",
    section: ExamSection.SETUP,
    text: "You have multiple projects and want to view all billing data in a single BigQuery dataset. What should you configure?",
    options: [
      "Cloud Logging sinks for each project",
      "Billing Export to BigQuery in the Billing Account settings",
      "A script that runs 'bq load' daily",
      "The 'Project Billing' dashboard in Cloud Monitoring"
    ],
    correctAnswerIndex: 1,
    explanation: "Billing Export is a native feature that sends detailed billing records to BigQuery for analysis."
  },
  {
    id: "s1-q7",
    section: ExamSection.SETUP,
    text: "You need to configure the Cloud SDK (gcloud) to use a specific project as the default for all commands. Which command should you use?",
    options: [
      "gcloud projects set [PROJECT_ID]",
      "gcloud config set project [PROJECT_ID]",
      "gcloud auth login [PROJECT_ID]",
      "gcloud init project [PROJECT_ID]"
    ],
    correctAnswerIndex: 1,
    explanation: "'gcloud config set project' updates the local configuration to use the specified project ID."
  },
  {
    id: "s1-q8",
    section: ExamSection.SETUP,
    text: "You are migrating a project from one Billing Account to another. Who must have the 'Billing Account User' role on the destination billing account?",
    options: [
      "The Project Owner",
      "The Organization Admin",
      "The person performing the migration",
      "Every developer in the project"
    ],
    correctAnswerIndex: 2,
    explanation: "The person linking the project to the billing account needs the 'Billing Account User' role on the account and 'Project Manager' or 'Owner' on the project."
  },
  {
    id: "s1-q9",
    section: ExamSection.SETUP,
    text: "You want to organize your projects into logical groups for centralized management. What resource hierarchy element should you use?",
    options: [
      "Labels",
      "Folders",
      "Tags",
      "Zones"
    ],
    correctAnswerIndex: 1,
    explanation: "Folders allow you to group projects and apply IAM policies or Organization policies at a group level."
  },
  {
    id: "s1-q10",
    section: ExamSection.SETUP,
    text: "Which command would you use to create a new project using the gcloud CLI?",
    options: [
      "gcloud compute projects create",
      "gcloud projects create [PROJECT_ID]",
      "gcloud alpha projects create",
      "gcloud resource-manager projects create"
    ],
    correctAnswerIndex: 1,
    explanation: "The standard command is 'gcloud projects create'."
  },
  {
    id: "s1-q11",
    section: ExamSection.SETUP,
    text: "You need to limit the amount of a specific resource (e.g., CPU cores) that can be used in a specific region. What should you adjust?",
    options: [
      "Organization Policy",
      "Quotas",
      "Billing Limits",
      "Instance Templates"
    ],
    correctAnswerIndex: 1,
    explanation: "Quotas protect you from unforeseen spikes in usage and Google from infrastructure overload."
  },
  {
    id: "s1-q12",
    section: ExamSection.SETUP,
    text: "You want to see a history of all gcloud commands that were run in your local environment. Where is this information stored?",
    options: [
      "Cloud Logging",
      "The .gcloud directory in your home folder",
      "Audit Logs",
      "Project Metadata"
    ],
    correctAnswerIndex: 1,
    explanation: "Cloud SDK stores local state and logs in a hidden .config/gcloud (or similar) directory on your machine."
  },
  {
    id: "s1-q13",
    section: ExamSection.SETUP,
    text: "When setting up a new Organization, what is the prerequisite?",
    options: [
      "A valid credit card",
      "A Google Workspace or Cloud Identity account",
      "At least five existing projects",
      "A registered domain in Google Domains"
    ],
    correctAnswerIndex: 1,
    explanation: "Organizations require a Google Workspace or Cloud Identity account to define the boundary of the domain."
  },
  {
    id: "s1-q14",
    section: ExamSection.SETUP,
    text: "What is the primary benefit of using a Shared VPC?",
    options: [
      "Lower latency between projects",
      "Centralized management of network resources while allowing developers to manage their own projects",
      "Automatic load balancing across projects",
      "Reduced cost of egress traffic"
    ],
    correctAnswerIndex: 1,
    explanation: "Shared VPC allows an organization to connect resources from multiple projects to a common VPC network, maintained by network admins."
  },

  // SECTION 2: Planning and Implementation (~30%)
  {
    id: "s2-q1",
    section: ExamSection.PLANNING,
    text: "You need to deploy a containerized web application that scales automatically based on request traffic and can scale down to zero when not in use. Which service is best?",
    options: [
      "Compute Engine with Managed Instance Groups",
      "Google Kubernetes Engine (Standard)",
      "Cloud Run",
      "App Engine Flexible Environment"
    ],
    correctAnswerIndex: 2,
    explanation: "Cloud Run is a managed compute platform that automatically scales your stateless containers, including scaling to zero."
  },
  {
    id: "s2-q2",
    section: ExamSection.PLANNING,
    text: "You are designing a high-performance database cluster on Compute Engine. You need the lowest possible latency for data access. Which storage option should you choose?",
    options: [
      "Standard Persistent Disk",
      "Regional Persistent Disk",
      "Local SSD",
      "Cloud Storage FUSE"
    ],
    correctAnswerIndex: 2,
    explanation: "Local SSDs are physically attached to the server that hosts the VM instance, providing very high IOPS and low latency."
  },
  {
    id: "s2-q3",
    section: ExamSection.PLANNING,
    text: "You are creating a GKE cluster for a production environment and want Google to manage the nodes, including autoscaling and upgrades, without managing the underlying VMs. Which mode should you use?",
    options: [
      "GKE Standard",
      "GKE Autopilot",
      "GKE Enterprise",
      "GKE Bare Metal"
    ],
    correctAnswerIndex: 1,
    explanation: "GKE Autopilot is a fully managed mode of operation in GKE where Google manages the cluster infrastructure, including nodes and node pools."
  },
  {
    id: "s2-q4",
    section: ExamSection.PLANNING,
    text: "You need to connect two VPCs in the same organization so that they can communicate using private IP addresses. What is the most efficient networking solution?",
    options: [
      "Cloud VPN",
      "VPC Network Peering",
      "Cloud Interconnect",
      "External HTTP(S) Load Balancing"
    ],
    correctAnswerIndex: 1,
    explanation: "VPC Network Peering allows internal IP address connectivity across two VPC networks regardless of whether they belong to the same project or organization."
  },
  {
    id: "s2-q5",
    section: ExamSection.PLANNING,
    text: "Which relational database service supports global scaling and horizontal writes with strong consistency?",
    options: [
      "Cloud SQL",
      "Cloud Bigtable",
      "Cloud Spanner",
      "Firestore"
    ],
    correctAnswerIndex: 2,
    explanation: "Cloud Spanner is a fully managed, mission-critical, relational database service that offers transactional consistency at global scale."
  },
  {
    id: "s2-q6",
    section: ExamSection.PLANNING,
    text: "You are using Terraform to manage your infrastructure. You want to ensure that the infrastructure matches the state defined in your code. Which command do you run first to see what changes will be made?",
    options: ["terraform apply", "terraform plan", "terraform init", "terraform destroy"],
    correctAnswerIndex: 1,
    explanation: "'terraform plan' creates an execution plan, letting you preview the changes Terraform will make to your infrastructure."
  },
  {
    id: "s2-q7",
    section: ExamSection.PLANNING,
    text: "Your application requires a NoSQL document database that scales globally and supports offline synchronization for mobile devices. Which GCP service fits?",
    options: ["Cloud SQL", "Firestore", "BigQuery", "Memorystore"],
    correctAnswerIndex: 1,
    explanation: "Firestore is a NoSQL document database built for automatic scaling, high performance, and ease of application development."
  },
  {
    id: "s2-q8",
    section: ExamSection.PLANNING,
    text: "You need to store 10 TB of data that is rarely accessed but must be available immediately if needed. Which storage class is the most cost-effective?",
    options: [
      "Standard",
      "Nearline",
      "Coldline",
      "Archive"
    ],
    correctAnswerIndex: 3,
    explanation: "Archive storage is the lowest-cost option for data that is accessed less than once a year."
  },
  {
    id: "s2-q9",
    section: ExamSection.PLANNING,
    text: "You want to deploy a PHP application that requires high availability but you don't want to manage the underlying infrastructure or containers. Which service should you choose?",
    options: [
      "Compute Engine",
      "App Engine Standard",
      "Cloud Run",
      "Google Kubernetes Engine"
    ],
    correctAnswerIndex: 1,
    explanation: "App Engine Standard is ideal for applications written in specific supported languages where you want a fully managed platform."
  },
  {
    id: "s2-q10",
    section: ExamSection.PLANNING,
    text: "What is the recommended tool for migrating large amounts of data (e.g., 50 TB) from on-premises storage to Cloud Storage over the internet?",
    options: [
      "gsutil",
      "Cloud Storage Transfer Service",
      "Transfer Appliance",
      "Cloud VPN"
    ],
    correctAnswerIndex: 1,
    explanation: "Storage Transfer Service is optimized for large-scale data transfers from online sources to Cloud Storage."
  },
  {
    id: "s2-q11",
    section: ExamSection.PLANNING,
    text: "You need to distribute incoming HTTP traffic among multiple Compute Engine instances in different regions. Which Load Balancer should you use?",
    options: [
      "Internal HTTP(S) Load Balancer",
      "Global External HTTP(S) Load Balancer",
      "Network TCP/UDP Load Balancer",
      "Proxy Network Load Balancer"
    ],
    correctAnswerIndex: 1,
    explanation: "The Global External HTTP(S) Load Balancer uses a single global IP address to route traffic to the nearest region."
  },
  {
    id: "s2-q12",
    section: ExamSection.PLANNING,
    text: "You want to reduce the cost of running batch processing jobs on Compute Engine that can be interrupted. Which VM feature should you use?",
    options: [
      "Shielded VMs",
      "Confidential VMs",
      "Spot VMs (formerly Preemptible)",
      "Sole-tenant nodes"
    ],
    correctAnswerIndex: 2,
    explanation: "Spot VMs offer a significant discount in exchange for Google being able to terminate them with short notice if it needs the capacity."
  },
  {
    id: "s2-q13",
    section: ExamSection.PLANNING,
    text: "Which service should you use for caching frequent database queries to improve performance?",
    options: [
      "Cloud Bigtable",
      "Memorystore for Redis",
      "Cloud Spanner",
      "BigQuery BI Engine"
    ],
    correctAnswerIndex: 1,
    explanation: "Memorystore is a fully managed in-memory data store service for Redis and Memcached."
  },
  {
    id: "s2-q14",
    section: ExamSection.PLANNING,
    text: "You need to store large amounts of non-relational, analytical data (e.g., IoT telemetry) that requires very low latency for writes. Which service should you use?",
    options: [
      "BigQuery",
      "Cloud Bigtable",
      "Cloud SQL",
      "Firestore"
    ],
    correctAnswerIndex: 1,
    explanation: "Cloud Bigtable is a high-performance NoSQL database designed for large analytical and operational workloads."
  },
  {
    id: "s2-q15",
    section: ExamSection.PLANNING,
    text: "You are planning a VPC and want to ensure that resources in different subnets can communicate privately. By default, what is the connectivity?",
    options: [
      "Blocked by the default firewall",
      "Allowed by the default route and firewall rules",
      "Requires VPC Peering",
      "Requires a Cloud Router"
    ],
    correctAnswerIndex: 1,
    explanation: "Within a VPC, all subnets can communicate by default unless firewall rules are added to block them."
  },
  {
    id: "s2-q16",
    section: ExamSection.PLANNING,
    text: "You need to perform petabyte-scale data warehousing and run complex SQL queries. Which service is appropriate?",
    options: [
      "Cloud SQL",
      "Cloud Spanner",
      "BigQuery",
      "Dataproc"
    ],
    correctAnswerIndex: 2,
    explanation: "BigQuery is Google's fully managed, serverless data warehouse."
  },
  {
    id: "s2-q17",
    section: ExamSection.PLANNING,
    text: "What is the purpose of an 'Instance Template' in Compute Engine?",
    options: [
      "To back up a running VM",
      "To define the configuration for a Managed Instance Group",
      "To migrate a VM between regions",
      "To store user data"
    ],
    correctAnswerIndex: 1,
    explanation: "Instance Templates define the machine type, boot disk image, and other settings used to create new VM instances in a MIG."
  },
  {
    id: "s2-q18",
    section: ExamSection.PLANNING,
    text: "Which service is best for running Apache Spark or Apache Hadoop clusters?",
    options: [
      "Dataflow",
      "Dataproc",
      "Dataprep",
      "BigQuery"
    ],
    correctAnswerIndex: 1,
    explanation: "Dataproc is a managed service for running Hadoop and Spark jobs."
  },

  // SECTION 3: Operations (~27%)
  {
    id: "s3-q1",
    section: ExamSection.OPERATION,
    text: "How can you securely connect to a Compute Engine instance that does not have an external IP address?",
    options: [
      "Use SSH through the Google Cloud Console with IAP (Identity-Aware Proxy)",
      "Use a standard SSH client over the public internet",
      "Assign a temporary external IP address and then remove it",
      "Connect via a Cloud Storage bucket"
    ],
    correctAnswerIndex: 0,
    explanation: "IAP's TCP forwarding feature allows you to use SSH to connect to VMs that only have internal IP addresses."
  },
  {
    id: "s3-q2",
    section: ExamSection.OPERATION,
    text: "You want to move older files in a Cloud Storage bucket to a 'Coldline' storage class automatically after 30 days to save costs. What feature should you use?",
    options: [
      "Cloud Functions",
      "gsutil move command",
      "Object Lifecycle Management",
      "Retention Policies"
    ],
    correctAnswerIndex: 2,
    explanation: "Object Lifecycle Management allows you to define rules to automatically transition objects to different storage classes based on age, version, or other criteria."
  },
  {
    id: "s3-q3",
    section: ExamSection.OPERATION,
    text: "Which command-line tool is primarily used to manage GKE clusters and deploy Kubernetes resources?",
    options: [
      "gcloud",
      "gsutil",
      "kubectl",
      "bq"
    ],
    correctAnswerIndex: 2,
    explanation: "While 'gcloud' is used to create the cluster, 'kubectl' is the standard Kubernetes CLI tool used for interacting with the cluster's API."
  },
  {
    id: "s3-q4",
    section: ExamSection.OPERATION,
    text: "You need to view the logs of a specific application running on Compute Engine. Where in the Cloud Console can you find this information?",
    options: [
      "Cloud Trace",
      "Cloud Logging",
      "Cloud Monitoring",
      "Cloud Debugger"
    ],
    correctAnswerIndex: 1,
    explanation: "Cloud Logging is the centralized service for storing, searching, and analyzing log data from GCP resources."
  },
  {
    id: "s3-q5",
    section: ExamSection.OPERATION,
    text: "You need to scale a GKE node pool to zero nodes when there is no workload. Which feature should you enable?",
    options: ["Horizontal Pod Autoscaler", "Vertical Pod Autoscaler", "Cluster Autoscaler", "Node Auto-Provisioning"],
    correctAnswerIndex: 2,
    explanation: "The Cluster Autoscaler automatically adds or removes nodes from a node pool based on the resource demands of your Pods."
  },
  {
    id: "s3-q6",
    section: ExamSection.OPERATION,
    text: "You need to take a consistent backup of a 1 TB Persistent Disk that is attached to a running VM. What should you do?",
    options: [
      "Copy the files to Cloud Storage",
      "Create a Snapshot of the disk",
      "Create a new Disk from the existing one",
      "Stop the VM and export the disk to a local machine"
    ],
    correctAnswerIndex: 1,
    explanation: "Snapshots are the recommended way to back up Persistent Disks. They are incremental and can be taken while the disk is attached."
  },
  {
    id: "s3-q7",
    section: ExamSection.OPERATION,
    text: "A Compute Engine instance is unresponsive. Which command will restart the instance using gcloud?",
    options: [
      "gcloud compute instances restart",
      "gcloud compute instances reset",
      "gcloud compute instances reboot",
      "gcloud compute instances stop && gcloud compute instances start"
    ],
    correctAnswerIndex: 1,
    explanation: "'gcloud compute instances reset' performs a hard reset (like a power cycle) on the instance."
  },
  {
    id: "s3-q8",
    section: ExamSection.OPERATION,
    text: "You want to update the machine type of a Compute Engine instance. What must you do first?",
    options: [
      "Delete and recreate the instance",
      "Stop the instance",
      "Take a snapshot",
      "Remove all firewall rules"
    ],
    correctAnswerIndex: 1,
    explanation: "You cannot change the machine type of a running VM; it must be in a TERMINATED state."
  },
  {
    id: "s3-q9",
    section: ExamSection.OPERATION,
    text: "How do you split traffic between two different versions of an application running on App Engine?",
    options: [
      "Use a Load Balancer",
      "Use the Traffic Splitting feature in the App Engine console or gcloud app services set-traffic",
      "Create a custom DNS record",
      "Update the app.yaml file for both versions"
    ],
    correctAnswerIndex: 1,
    explanation: "App Engine has built-in traffic splitting capabilities based on IP address, cookie, or random weight."
  },
  {
    id: "s3-q10",
    section: ExamSection.OPERATION,
    text: "You need to upload a large file to a Cloud Storage bucket using the command line. Which command is most efficient?",
    options: [
      "gcloud storage upload",
      "gsutil cp -m",
      "gsutil mb",
      "curl -X POST"
    ],
    correctAnswerIndex: 1,
    explanation: "The '-m' flag in 'gsutil cp' enables multi-threaded/parallel processing, making transfers much faster."
  },
  {
    id: "s3-q11",
    section: ExamSection.OPERATION,
    text: "You want to monitor the CPU usage of your GKE nodes. Which service provides this information?",
    options: [
      "Cloud Logging",
      "Cloud Monitoring",
      "Cloud Trace",
      "Cloud Profiler"
    ],
    correctAnswerIndex: 1,
    explanation: "Cloud Monitoring (formerly Stackdriver Monitoring) tracks metrics like CPU, memory, and disk usage."
  },
  {
    id: "s3-q12",
    section: ExamSection.OPERATION,
    text: "Which command-line tool is used to interact with BigQuery?",
    options: [
      "gcloud bq",
      "bq",
      "sql",
      "bigquery-cli"
    ],
    correctAnswerIndex: 1,
    explanation: "'bq' is the Python-based command-line tool for BigQuery."
  },
  {
    id: "s3-q13",
    section: ExamSection.OPERATION,
    text: "You need to find out why a GKE Pod is failing to start. Which kubectl command should you use?",
    options: [
      "kubectl get pods",
      "kubectl describe pod [POD_NAME]",
      "kubectl logs [POD_NAME]",
      "kubectl delete pod [POD_NAME]"
    ],
    correctAnswerIndex: 1,
    explanation: "'kubectl describe' provides detailed information about a resource's state and events (e.g., PullErrors)."
  },
  {
    id: "s3-q14",
    section: ExamSection.OPERATION,
    text: "You want to receive an email notification when a specific metric (e.g., disk usage) exceeds a threshold. What should you create?",
    options: [
      "An Alerting Policy in Cloud Monitoring",
      "A Cloud Function",
      "A Pub/Sub topic",
      "A Log Sink"
    ],
    correctAnswerIndex: 0,
    explanation: "Alerting policies define the conditions that trigger an incident and the notification channels to use."
  },
  {
    id: "s3-q15",
    section: ExamSection.OPERATION,
    text: "Which gcloud command group is used to manage Cloud SQL instances?",
    options: [
      "gcloud db",
      "gcloud sql",
      "gcloud cloud-sql",
      "gcloud storage databases"
    ],
    correctAnswerIndex: 1,
    explanation: "'gcloud sql' is the command group for managing Cloud SQL instances."
  },
  {
    id: "s3-q16",
    section: ExamSection.OPERATION,
    text: "How can you view the console output (serial port logs) of a Compute Engine instance that is failing to boot?",
    options: [
      "SSH into the instance",
      "View serial port output in the Cloud Console or use gcloud compute instances get-serial-port-output",
      "Check Cloud Storage logs",
      "Enable IAP and then check logs"
    ],
    correctAnswerIndex: 1,
    explanation: "Serial port output is invaluable for debugging boot failures or kernel panics."
  },

  // SECTION 4: Access and Security (~20%)
  {
    id: "s4-q1",
    section: ExamSection.SECURITY,
    text: "You need to grant a service account the ability to sign URLs for Cloud Storage. Which IAM role is required for the service account?",
    options: [
      "roles/storage.admin",
      "roles/iam.serviceAccountTokenCreator",
      "roles/storage.objectViewer",
      "roles/editor"
    ],
    correctAnswerIndex: 1,
    explanation: "The 'Service Account Token Creator' role allows a principal to create short-lived credentials, which is required for signing URLs."
  },
  {
    id: "s4-q2",
    section: ExamSection.SECURITY,
    text: "What is the primary difference between a 'Predefined' role and a 'Custom' role in IAM?",
    options: [
      "Predefined roles can be modified, Custom roles cannot",
      "Custom roles can only be used at the project level",
      "Predefined roles are managed by Google; Custom roles are managed by the user",
      "Predefined roles always include 'owner' permissions"
    ],
    correctAnswerIndex: 2,
    explanation: "Google creates and maintains predefined roles. Users create custom roles to bundle specific permissions if predefined roles are too broad."
  },
  {
    id: "s4-q3",
    section: ExamSection.SECURITY,
    text: "You want to allow a developer to temporarily 'act as' a service account to perform specific tasks. What IAM concept is this?",
    options: [
      "Service Account Impersonation",
      "Service Account Key rotation",
      "Direct Identity Mapping",
      "Role-based Access Control (RBAC)"
    ],
    correctAnswerIndex: 0,
    explanation: "Impersonation allows a user to assume the identity and permissions of a service account without needing its private key."
  },
  {
    id: "s4-q4",
    section: ExamSection.SECURITY,
    text: "Which of the following is a Best Practice for managing Service Account keys?",
    options: [
      "Store them in the application source code",
      "Avoid using manual keys and prefer IAM-managed service account credentials",
      "Email them to the development team",
      "Upload them to a public GitHub repository"
    ],
    correctAnswerIndex: 1,
    explanation: "Using managed credentials (like those provided by Metadata Server) or Workload Identity is significantly more secure than downloading and managing JSON keys manually."
  },
  {
    id: "s4-q5",
    section: ExamSection.SECURITY,
    text: "You are configuring a GKE application to access Cloud Storage. What is the most secure way to provide the application with access?",
    options: [
      "Download a service account JSON key and mount it as a Secret",
      "Use Workload Identity to map a Kubernetes Service Account to a Google Service Account",
      "Grant the GKE Node's default service account Full Access to all APIs",
      "Hardcode the credentials in the container image"
    ],
    correctAnswerIndex: 1,
    explanation: "Workload Identity is the recommended way to access Google Cloud services from applications running on GKE because of its security and manageability."
  },
  {
    id: "s4-q6",
    section: ExamSection.SECURITY,
    text: "Which IAM role allows a user to modify all resources in a project but not manage IAM policies or billing?",
    options: [
      "roles/owner",
      "roles/editor",
      "roles/viewer",
      "roles/browser"
    ],
    correctAnswerIndex: 1,
    explanation: "The 'Editor' role provides permissions for all actions that 'Viewer' does, plus actions that modify state, but doesn't allow changing IAM or billing."
  },
  {
    id: "s4-q7",
    section: ExamSection.SECURITY,
    text: "What is the purpose of a Firewall Rule with the 'Target Tag' attribute?",
    options: [
      "To apply the rule to all instances in a VPC",
      "To apply the rule only to VM instances that have the matching network tag",
      "To mark traffic for later analysis",
      "To block traffic from a specific country"
    ],
    correctAnswerIndex: 1,
    explanation: "Network tags are used to identify specific groups of VMs to which firewall rules or routes should apply."
  },
  {
    id: "s4-q8",
    section: ExamSection.SECURITY,
    text: "You want to ensure that only traffic from a specific Load Balancer can reach your Compute Engine instances. How should you configure your firewall?",
    options: [
      "Block all traffic by default",
      "Create an allow rule for the Load Balancer's IP range (e.g., 130.211.0.0/22 and 35.191.0.0/16)",
      "Use a Target Tag on the instances",
      "Enable IAP"
    ],
    correctAnswerIndex: 1,
    explanation: "GCP Load Balancers use specific IP ranges for health checks and traffic delivery. You must allow these ranges in your firewall rules."
  },
  {
    id: "s4-q9",
    section: ExamSection.SECURITY,
    text: "Which service helps protect your applications against Distributed Denial of Service (DDoS) attacks?",
    options: [
      "Cloud IAM",
      "Cloud Armor",
      "Cloud Firewall",
      "Identity-Aware Proxy"
    ],
    correctAnswerIndex: 1,
    explanation: "Cloud Armor provides DDoS protection and a Web Application Firewall (WAF) for your global HTTP(S) load balancers."
  },
  {
    id: "s4-q10",
    section: ExamSection.SECURITY,
    text: "You want to grant a user permission to view logs only in a specific project. Which role should you assign?",
    options: [
      "roles/logging.viewer",
      "roles/logging.admin",
      "roles/viewer",
      "roles/logging.logWriter"
    ],
    correctAnswerIndex: 0,
    explanation: "roles/logging.viewer provides the minimum permissions to view logs."
  },
  {
    id: "s4-q11",
    section: ExamSection.SECURITY,
    text: "What is the primary function of the Cloud Key Management Service (KMS)?",
    options: [
      "To store user passwords",
      "To manage and rotate cryptographic keys for data encryption",
      "To provide SSH keys for VMs",
      "To manage SSL certificates"
    ],
    correctAnswerIndex: 1,
    explanation: "Cloud KMS allows you to manage encryption keys and perform cryptographic operations."
  },
  {
    id: "s4-q12",
    section: ExamSection.SECURITY,
    text: "Which type of Cloud Audit Log records when a user modifies the configuration of a resource?",
    options: [
      "Admin Activity logs",
      "Data Access logs",
      "System Event logs",
      "Policy Execution logs"
    ],
    correctAnswerIndex: 0,
    explanation: "Admin Activity audit logs contain log entries for API calls or other administrative actions that modify the configuration or metadata of resources."
  }
];
