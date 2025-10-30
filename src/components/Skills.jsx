import React from 'react'

const skillGroups = [
  {
    title: 'Big Data & Processing',
    items: ['Spark (PySpark, Scala)', 'Hadoop, HDFS, MapReduce', 'Hive, Impala', 'Kafka', 'Airflow', 'Oozie']
  },
  {
    title: 'Cloud & Data Platforms',
    items: ['AWS (EMR, S3, Glue, Lambda, Redshift)', 'Azure (Databricks, ADF, Data Lake)', 'Snowflake']
  },
  {
    title: 'Languages & Tools',
    items: ['Python (PySpark)', 'Scala', 'SQL', 'Terraform', 'Docker', 'Kubernetes']
  },
  {
    title: 'Visualization & BI',
    items: ['Tableau', 'Power BI', 'Matplotlib']
  }
]

export default function Skills() {
  return (
    <div className="section">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {skillGroups.map((g) => (
          <div key={g.title} className="card p-6">
            <h3 className="text-lg font-medium mb-2">{g.title}</h3>
            <ul className="list-disc list-inside text-zinc-300">
              {g.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
