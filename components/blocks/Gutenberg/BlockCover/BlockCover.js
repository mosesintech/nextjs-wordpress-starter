import Blocks from '@/components/molecules/Blocks'
import Hero from '@/components/organisms/Hero'
import PropTypes from 'prop-types'

/**
 * Cover Block
 *
 * The core Columns block from Gutenberg.
 *
 * @author WebDevStudios
 * @param  {object}  props             The component properties.
 * @param  {object}  props.media       Media props object.
 * @param  {Array}   props.innerBlocks The array of inner blocks to display.
 * @return {Element}                   The Cover component.
 */
export default function BlockCover({media, innerBlocks}) {
  /* eslint-disable no-unused-vars */
  const {
    align,
    anchor,
    backgroundType,
    className,
    contentPosition,
    customGradient,
    dimRatio,
    gradientHex,
    hasParallax,
    isRepeated,
    minHeight,
    overlayColorHex,
    style,
    url
  } = media
  /* eslint-enable no-unused-vars */

  const overlayColor = overlayColorHex || '#000000'
  const overlayGradient = customGradient || gradientHex
  const overlayOpacity = url ? dimRatio / 100 : 1

  // Add custom styles for Hero.
  const coverStyle = {}

  if (overlayColor && !overlayGradient) {
    coverStyle.backgroundColor = overlayColor
  }

  if (overlayGradient) {
    coverStyle.background = overlayGradient
  }

  const [newInnerBlocks, setInnerBlocks] = useState()

  // Add extra class(es) to inner blocks on initial load.
  useEffect(() => {
    setInnerBlocks(
      !innerBlocks?.length
        ? []
        : innerBlocks.map((block) => {
            const classes = (block?.attributes?.className ?? '').split(' ')

            // Extra check to only add class once.
            if (classes.includes('relative')) {
              return block
            }

            block.attributes = {
              ...block?.attributes,
              className: `${block?.attributes?.className || ''} relative`
            }

            return block
          })
    )
  }, [innerBlocks])

  // Only proceed if we're provided a media URL or a user-selected overlay color/gradient.
  if (!url && !overlayColorHex && !overlayGradient) {
    return null
  }

  return (
    <Hero
      backgroundImage={{url}}
      className={className}
      id={anchor}
      overlayOpacity={overlayOpacity}
      style={coverStyle}
    >
      {!!newInnerBlocks?.length && <Blocks blocks={newInnerBlocks} />}
    </Hero>
  )
}

BlockCover.propTypes = {
  media: PropTypes.shape({
    align: PropTypes.string,
    anchor: PropTypes.string,
    backgroundType: PropTypes.string,
    className: PropTypes.string,
    contentPosition: PropTypes.string,
    customGradient: PropTypes.string,
    dimRatio: PropTypes.number,
    gradientHex: PropTypes.string,
    hasParallax: PropTypes.bool,
    isRepeated: PropTypes.bool,
    minHeight: PropTypes.number,
    overlayColorHex: PropTypes.string,
    style: PropTypes.object,
    url: PropTypes.string
  }),
  innerBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      attributes: PropTypes.object
    })
  )
}
