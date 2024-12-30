import type React from 'react'

const BlockPreview: React.FC<{
  blockType: string
}> = ({ blockType }) => {
  return (
    <div
      className="block-preview"
      style={{
        background: '#f9fafb',
        borderRadius: '8px',
        marginBottom: '20px',
        padding: '20px',
      }}
    >
      <img
        alt={`${blockType} Block Preview`}
        src={`/blocks/${blockType}-preview.png`}
        style={{
          borderRadius: '4px',
          height: 'auto',
          marginBottom: '10px',
          maxWidth: '600px',
          width: '100%',
        }}
      />
    </div>
  )
}

export default BlockPreview
