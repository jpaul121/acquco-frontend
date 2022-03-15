import { sankey, sankeyLinkHorizontal } from 'd3-sankey'

const SankeyNode = ({ name, x0, x1, y0, y1, color }) => (
  <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} fill={color}>
    <title>{name}</title>
  </rect>
)

const SankeyLink = ({ link, color }) => (
  <path
    d={sankeyLinkHorizontal()(link)}
    style={{
      fill: 'none',
      stokeOpacity: '.3',
      stoke: color,
      stokeWidth: Math.max(1, link.width),
    }}
  />
)

export const SankeyDiagram = ({ data, height, width }) => {
  const { nodes, links } = sankey()
    .nodeWidth(15)
    .nodePadding(10)
    .nodeId(d => d.name)
    .extent([[1, 1], [width - 1, height - 5]])(data)
  return (
    <g style={{ mixBlendMode: 'multiply' }}>
      {
        nodes.map((node, i) => (
          <SankeyNode
            {...node}
            color={color(colorScale(i)).hex()}
            key={node.name}
          />
        ))
      }
      {
        links.map((link, i) => (
          <SankeyLink
            link={link}
            // color={color(colorScale(link.source.index)).hex()}
          />
        ))
      }
    </g>
  )
}
