import React from 'react'

const rows = [
  {
    company: 'Capital One, Plano, Texas',
    role: 'AWS Data Engineer',
    period: 'July 2024 – Present',
    points: [
      'Built serverless and cloud-based ETL pipelines using AWS Glue, Lambda, EMR and S3 to load data into Redshift and Snowflake.',
      'Developed PySpark applications for batch and streaming data processing; ingested real-time data from Kinesis and processed with Spark Streaming.',
      'Created Hive UDFs, DDL/DML for Redshift/Hive and automated jobs with Airflow / Cron; used CloudWatch for monitoring and alerting.',
      'Implemented Delta Lake based pipelines and optimized Glue workloads for cost and performance.',
    ],
  },
  {
    company: 'Verizon, Tampa, Florida',
    role: 'Azure Data Engineer',
    period: 'Dec 2021 – June 2024',
    points: [
      'Designed and implemented data pipelines using Azure Data Factory, Databricks, and Azure Data Lake Storage.',
      'Built PySpark and Spark-Scala jobs for ETL/ELT, and tuned Hive/Impala queries for performance using partitioning and bucketing.',
      'Developed ADF pipelines to move on-prem data to Azure and used Databricks for interactive analysis and Delta Lake storage.',
      'Automated workflows with Airflow/Oozie and created monitoring dashboards and reports with Power BI / Tableau.',
    ],
  },
  {
    company: 'IBM, India',
    role: 'Big Data Engineer',
    period: 'Jan 2019 – Nov 2020',
    points: [
      'Developed Spark (Scala/PySpark) applications and MapReduce jobs for large-scale ETL and analytics.',
      'Built a Data Quality Framework in PySpark for schema validation and profiling; automated pipelines with Oozie and Airflow.',
      'Migrated data from Teradata/SQL Server to Hadoop, and used AWS EMR, S3 for processing and storage.',
    ],
  },
]

export default function Experience() {
  return (
    <div className="section">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="grid gap-6">
        {rows.map((r) => (
          <div key={r.company} className="card p-6">
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="text-xl font-semibold">{r.company}</h3>
              <span className="text-sm text-zinc-400">{r.period}</span>
            </div>
            <p className="text-zinc-300">{r.role}</p>
            <ul className="mt-3 list-disc list-inside text-zinc-300 space-y-1">
              {r.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
