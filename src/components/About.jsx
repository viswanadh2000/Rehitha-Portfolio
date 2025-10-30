import React from 'react'

export default function About() {
  return (
    <div className="section">
      <div className="card p-8">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <div className="text-zinc-300 leading-relaxed space-y-4">
          <p>Sr Data Engineer with around 6+ years of experience in Big Data Analytics and building scalable data pipelines across cloud platforms (AWS, Azure).</p>
          <h3 className="text-lg font-medium">Summary highlights</h3>
          <ul className="list-disc list-inside">
            <li>Hands-on with Hadoop ecosystem (HDFS, MapReduce, Spark, Yarn, Kafka, Hive, HBase, Sqoop, Flume, Oozie, Airflow).</li>
            <li>Strong AWS & Azure experience: S3, EMR, Glue, Lambda, Redshift, Databricks, Azure Data Factory, Data Lake.</li>
            <li>Expertise in PySpark / Spark-Scala for batch and streaming; implemented production streaming (Kinesis, Spark Streaming).</li>
            <li>Built ETL/ELT pipelines for ingestion, validation, transformation and loading into data warehouses (Snowflake, Redshift).</li>
            <li>Experience with orchestration (Airflow, Oozie), IaC (Terraform), CI/CD (Jenkins, Docker, Kubernetes).</li>
          </ul>

          <h3 className="text-lg font-medium pt-4">Technical skills</h3>
          <p className="text-zinc-300">
            Big Data: Spark, Hadoop, Hive, Kafka, Airflow • Cloud: AWS (EMR, S3, Glue, Lambda, Redshift), Azure (Databricks, ADF, Data Lake) • Languages: Python (PySpark), Scala, SQL • Databases: Snowflake, Redshift, MySQL, PostgreSQL • Tools: Terraform, Docker, Kubernetes, Jenkins, Tableau, Power BI
          </p>
        </div>
      </div>
    </div>
  )
}
