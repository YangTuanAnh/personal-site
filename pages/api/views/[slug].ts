import db from '../../../lib/firebase'

export default async (req: any, res: any) =>
{
  // increment the views
  if (req.method === 'POST')
  {
    const ref = db.ref('views').child(req.query.slug)
    const { snapshot } = await ref.transaction((currentViews) =>
    {
      if (currentViews === null)
      {
        return 1
      }

      return currentViews + 1
    })

    db.ref("viewTime")
      .child(req.query.slug)
        .child(new Date().toLocaleString().replace(/\//g, '-'))
          .set(snapshot.val())

    return res.status(200).json({
      total: snapshot.val(),
    })
  }

  // fetch the views
  if (req.method === 'GET')
  {
    const snapshot = await db.ref('views').child(req.query.slug).once('value')
    const views = snapshot.val()

    return res.status(200).json({ total: views })
  }
}